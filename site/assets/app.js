/*
 * 看板前端：启动时读取 data/topk.json（由 scripts/build.py 生成），不内嵌任何数据。
 * 本地预览需要一个静态服务器（浏览器禁止 file:// 页面读取本地 JSON）：
 *   python3 -m http.server -d site 8000
 */
(function(){
  fetch('data/topk.json', { cache:'no-cache' })
    .then(function(res){
      if(!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(start)
    .catch(function(err){
      document.getElementById('groupsContainer').innerHTML =
        '<div class="empty-state">无法加载 data/topk.json（' + String(err.message || err) + '）。<br>' +
        '如果是直接双击打开的 HTML，浏览器会拦截本地文件读取；请在项目根目录运行 ' +
        '<code>python3 -m http.server -d site 8000</code> 后访问 http://localhost:8000</div>';
    });

  function start(site){
  var REF = new Date(site.generated_at + 'T00:00:00Z');
  var TAXONOMY = site.taxonomy;
  var TOP_K = site.ranking.k;
  var data = site.projects;


  function daysSince(dateStr){
    var d = new Date(dateStr + 'T00:00:00Z');
    return (REF - d) / (1000*60*60*24);
  }
  function fmtStars(n){
    if(n >= 1e6) return (n/1e6).toFixed(1).replace(/\.0$/,'') + 'M';
    if(n >= 1000) return (n/1000).toFixed(1).replace(/\.0$/,'') + 'k';
    return String(n);
  }

  data.forEach(function(d){
    d.freshDays = daysSince(d.pushed);
    d.fresh = d.freshDays <= 30;
    d.org = d.name.split('/')[0];
    d.stacks = d.stack.split(' / ');
  });

  document.querySelectorAll('[data-k]').forEach(function(el){ el.textContent = TOP_K; });
  document.getElementById('meta').textContent =
    '共 ' + data.length + ' 个项目 · star 数据更新于 ' + site.generated_at + ' · 全站排名快照 ' + site.ranking.fetched_at;

  // 两级分类：TAXONOMY 来自 data/taxonomy.json，d.category 是小分类 key
  var SUB_INFO = {};
  TAXONOMY.forEach(function(major){
    major.subs.forEach(function(sub){ SUB_INFO[sub.key] = { label:sub.label, def:sub.def, major:major.key }; });
  });

  var sortKey = 'stars';
  var filters = { q:'', status:new Set(), langs:new Set(), categories:new Set(), orgs:new Set() };

  function setupDropdown(cfg){
    // cfg: {btnEl, menuEl, items:[{value,label,count}], filterSet, baseLabel}
    cfg.menuEl.innerHTML = cfg.items.map(function(it){
      return '<label class="dropdown-item"><input type="checkbox" value="'+it.value+'">'+
        '<span>'+it.label+'</span>'+(it.count != null ? '<span class="n">'+it.count+'</span>' : '')+'</label>';
    }).join('');

    function sync(){
      cfg.menuEl.querySelectorAll('input').forEach(function(cb){ cb.checked = cfg.filterSet.has(cb.value); });
      var n = cfg.filterSet.size;
      cfg.btnEl.textContent = n > 0 ? (cfg.baseLabel + ' (' + n + ')') : cfg.baseLabel;
      cfg.btnEl.classList.toggle('active', n > 0);
    }

    cfg.menuEl.addEventListener('change', function(e){
      if(e.target.tagName !== 'INPUT') return;
      if(e.target.checked) cfg.filterSet.add(e.target.value);
      else cfg.filterSet.delete(e.target.value);
      sync();
      render();
    });

    cfg.btnEl.addEventListener('click', function(e){
      e.stopPropagation();
      var willOpen = cfg.menuEl.hidden;
      document.querySelectorAll('.dropdown-menu').forEach(function(m){ m.hidden = true; });
      cfg.menuEl.hidden = !willOpen;
    });

    sync();
    return sync;
  }

  document.addEventListener('click', function(e){
    if(!e.target.closest('.dropdown')){
      document.querySelectorAll('.dropdown-menu').forEach(function(m){ m.hidden = true; });
    }
  });

  var statusCounts = {
    official: data.filter(function(d){ return d.official; }).length,
    activeOnly: data.filter(function(d){ return d.fresh; }).length,
    newOnly: data.filter(function(d){ return d.is_new; }).length,
  };
  var statusItems = [
    { value:'official', label:'仅官方出品', count:statusCounts.official },
    { value:'activeOnly', label:'仅活跃维护', count:statusCounts.activeOnly },
    { value:'newOnly', label:'仅近 30 天新收录', count:statusCounts.newOnly },
  ].filter(function(it){ return it.count > 0; }).sort(function(a, b){ return b.count - a.count; });
  var syncStatusDropdown = setupDropdown({
    btnEl: document.getElementById('statusDropdownBtn'),
    menuEl: document.getElementById('statusDropdownMenu'),
    items: statusItems,
    filterSet: filters.status,
    baseLabel: '状态',
  });

  var categoryCounts = {};
  data.forEach(function(d){ categoryCounts[d.category] = (categoryCounts[d.category] || 0) + 1; });
  function majorCount(major){
    return major.subs.reduce(function(n, s){ return n + (categoryCounts[s.key] || 0); }, 0);
  }

  // 分类下拉是两级的，通用 setupDropdown 不适用：勾大类 = 全选/全不选它的小类，
  // 大类复选框在部分小类被选中时显示为半选。filters.categories 里只存小分类 key。
  var categoryBtn = document.getElementById('categoryDropdownBtn');
  var categoryMenu = document.getElementById('categoryDropdownMenu');
  categoryMenu.innerHTML = TAXONOMY.map(function(major){
    return '<label class="dropdown-item major"><input type="checkbox" data-major="' + major.key + '">' +
        '<span>' + major.label + '</span><span class="n">' + majorCount(major) + '</span></label>' +
      major.subs.map(function(sub){
        return '<label class="dropdown-item sub"><input type="checkbox" value="' + sub.key + '">' +
          '<span>' + sub.label + '</span><span class="n">' + (categoryCounts[sub.key] || 0) + '</span></label>';
      }).join('');
  }).join('');

  function syncCategoryDropdown(){
    categoryMenu.querySelectorAll('input[value]').forEach(function(cb){ cb.checked = filters.categories.has(cb.value); });
    TAXONOMY.forEach(function(major){
      var cb = categoryMenu.querySelector('input[data-major="' + major.key + '"]');
      var picked = major.subs.filter(function(s){ return filters.categories.has(s.key); }).length;
      cb.checked = picked === major.subs.length;
      cb.indeterminate = picked > 0 && picked < major.subs.length;
    });
    var n = filters.categories.size;
    categoryBtn.textContent = n > 0 ? ('分类 (' + n + ')') : '分类';
    categoryBtn.classList.toggle('active', n > 0);
  }

  categoryMenu.addEventListener('change', function(e){
    if(e.target.tagName !== 'INPUT') return;
    if(e.target.dataset.major){
      var major = TAXONOMY.filter(function(m){ return m.key === e.target.dataset.major; })[0];
      major.subs.forEach(function(s){
        if(e.target.checked) filters.categories.add(s.key); else filters.categories.delete(s.key);
      });
    } else if(e.target.checked){
      filters.categories.add(e.target.value);
    } else {
      filters.categories.delete(e.target.value);
    }
    syncCategoryDropdown();
    render();
  });

  categoryBtn.addEventListener('click', function(e){
    e.stopPropagation();
    var willOpen = categoryMenu.hidden;
    document.querySelectorAll('.dropdown-menu').forEach(function(m){ m.hidden = true; });
    categoryMenu.hidden = !willOpen;
  });
  syncCategoryDropdown();

  var langCounts = {};
  data.forEach(function(d){ d.stacks.forEach(function(s){ langCounts[s] = (langCounts[s] || 0) + 1; }); });
  var langItems = Object.keys(langCounts)
    .sort(function(a, b){ return langCounts[b] - langCounts[a]; })
    .map(function(l){ return { value:l, label:l, count:langCounts[l] }; });
  var syncLangDropdown = setupDropdown({
    btnEl: document.getElementById('langDropdownBtn'),
    menuEl: document.getElementById('langDropdownMenu'),
    items: langItems,
    filterSet: filters.langs,
    baseLabel: '语言',
  });

  var orgCounts = {};
  data.forEach(function(d){ orgCounts[d.org] = (orgCounts[d.org] || 0) + 1; });
  var orgItems = Object.keys(orgCounts)
    .sort(function(a, b){ return orgCounts[b] - orgCounts[a]; })
    .map(function(o){ return { value:o, label:o, count:orgCounts[o] }; });
  var syncOrgDropdown = setupDropdown({
    btnEl: document.getElementById('orgDropdownBtn'),
    menuEl: document.getElementById('orgDropdownMenu'),
    items: orgItems,
    filterSet: filters.orgs,
    baseLabel: '组织',
  });

  function filtersActive(){
    return !!filters.q || filters.status.size > 0 || filters.langs.size > 0 || filters.categories.size > 0 || filters.orgs.size > 0;
  }

  function updateResetVisibility(){
    document.getElementById('resetFilters').hidden = !filtersActive();
  }

  function matchesFilters(d){
    if(filters.status.has('official') && !d.official) return false;
    if(filters.status.has('activeOnly') && !d.fresh) return false;
    if(filters.status.has('newOnly') && !d.is_new) return false;
    if(filters.langs.size > 0 && !d.stacks.some(function(s){ return filters.langs.has(s); })) return false;
    if(filters.orgs.size > 0 && !filters.orgs.has(d.org)) return false;
    if(filters.q){
      var hay = (d.name + ' ' + d.summary).toLowerCase();
      if(hay.indexOf(filters.q.toLowerCase()) === -1) return false;
    }
    return true;
  }

  function sortItems(items){
    items.sort(function(a,b){
      if(sortKey === 'stars') return b.stars - a.stars;
      if(sortKey === 'created') return new Date(b.created) - new Date(a.created);
      if(sortKey === 'fresh') return a.freshDays - b.freshDays;
    });
    return items;
  }

  function cardHtml(d){
    var officialBadge = d.official
      ? '<span class="badge official">官方 · ' + esc(d.officialOrg) + '</span>'
      : '<span class="badge community">社区</span>';
    if(d.is_new) officialBadge += '<span class="badge new" title="收录于 ' + d.added + '">新收录</span>';
    if(d.archived) officialBadge += '<span class="badge archived" title="仓库已被作者归档（只读）">已归档</span>';
    var statusClass = d.fresh ? 'active' : 'stale';
    var statusTitle = d.fresh ? '最近 30 天内有推送' : ('已 ' + Math.round(d.freshDays) + ' 天未推送');

    var rankHtml = '';
    if(d.rank != null){
      var overCutoff = d.rank > TOP_K;
      var rankLabel = overCutoff ? (TOP_K + '+') : ((d.rank_estimated ? '≈#' : '#') + d.rank);
      var rankTitle = overCutoff
        ? ('Star 数低于 GitHub 全站 Top' + TOP_K + ' 门槛')
        : d.rank_estimated
          ? ('排名快照里没有这个仓库（多半是改过名），按 star 数估算约为第 ' + d.rank + ' 名')
          : ('GitHub 全站按 star 数排名第 ' + d.rank + '（排名快照 ' + site.ranking.fetched_at + '）');
      rankHtml = '<div title="' + rankTitle + '"><span class="stat secondary">' + rankLabel + '</span><div class="stat-label">GITHUB 全站排名</div></div>';
    }

    return '' +
      '<a class="card" href="https://github.com/' + esc(d.name) + '" target="_blank" rel="noopener">' +
        '<div class="card-top">' +
          '<div class="card-name">' + esc(d.name) + '<span class="go">↗</span></div>' +
          '<div class="status-dot ' + statusClass + '" title="' + statusTitle + '"></div>' +
        '</div>' +
        '<div class="badges">' + officialBadge + '</div>' +
        '<div class="stat-row">' +
          '<div><span class="stat">' + fmtStars(d.stars) + '</span><div class="stat-label">STARS</div></div>' +
          rankHtml +
        '</div>' +
        '<div class="dates"><span>创建 <b>' + d.created + '</b></span><span>更新 <b>' + d.pushed + '</b></span></div>' +
        '<div class="summary">' + esc(d.summary) + '</div>' +
        '<div class="foot">' +
          '<span>' + esc(d.stack) + '</span>' +
        '</div>' +
      '</a>';
  }

  // ---------- 侧边目录：整体可收起（状态记在 localStorage），每个大类的小类列表也可单独折叠 ----------
  var collapsedMajors = new Set();
  var root = document.documentElement;
  var narrow = window.matchMedia('(max-width:999px)');
  function readTocPref(){
    try { return localStorage.getItem('topk.tocOpen'); } catch(e){ return null; }
  }
  function setTocOpen(open, remember){
    root.classList.toggle('toc-open', open);
    if(remember && !narrow.matches){
      try { localStorage.setItem('topk.tocOpen', open ? '1' : '0'); } catch(e){}
    }
  }
  setTocOpen(narrow.matches ? false : readTocPref() !== '0', false);
  document.getElementById('tocOpen').addEventListener('click', function(){ setTocOpen(true, true); });
  document.getElementById('tocClose').addEventListener('click', function(){ setTocOpen(false, true); });
  document.getElementById('tocBody').addEventListener('click', function(e){
    var caret = e.target.closest('.toc-caret');
    if(caret){
      var box = caret.closest('.toc-major');
      box.classList.toggle('collapsed');
      if(box.classList.contains('collapsed')) collapsedMajors.add(box.dataset.major);
      else collapsedMajors.delete(box.dataset.major);
      return;
    }
    if(e.target.closest('a')){
      if(currentView === 'analysis') setView('cards', true);
      if(narrow.matches) setTocOpen(false, false);
    }
  });

  // 滚动时高亮当前所在的小类
  function updateTocCurrent(){
    var current = null;
    document.querySelectorAll('section.group').forEach(function(sec){
      if(sec.getBoundingClientRect().top <= 120) current = sec.id.slice(4);
    });
    document.querySelectorAll('#tocBody a[data-sub]').forEach(function(a){
      a.classList.toggle('current', a.dataset.sub === current);
    });
  }
  var tocTicking = false;
  window.addEventListener('scroll', function(){
    if(tocTicking) return;
    tocTicking = true;
    requestAnimationFrame(function(){ tocTicking = false; updateTocCurrent(); });
  }, { passive:true });

  // ---------- 数据分析视图：所有统计都基于当前筛选结果实时计算 ----------
  var DAY_MS = 1000*60*60*24;
  var analysisEl = document.getElementById('analysisView');
  var currentView = 'cards';
  var catSort = null;               // 分类概览的排序列；null = 按分类体系顺序
  var expandedCatMajors = new Set();
  var highlightMajor = '';
  var lastMatched = data;

  data.forEach(function(d){
    d.ageDays = (REF - new Date(d.created + 'T00:00:00Z')) / DAY_MS;
    d.newIn1y = d.ageDays <= 365;
    d.primaryLang = d.stacks[0];
  });

  // 语言 → 颜色槽位按全量数据的前 5 名固定下来，筛选后不会重新上色
  var langTotals = {};
  data.forEach(function(d){ langTotals[d.primaryLang] = (langTotals[d.primaryLang] || 0) + 1; });
  var TOP_LANGS = Object.keys(langTotals).sort(function(a, b){ return langTotals[b] - langTotals[a]; }).slice(0, 5);
  function langLabel(l){ return l === 'Markdown' ? 'Markdown（纯文档）' : l; }

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function fmtInt(n){ return n.toLocaleString('en-US'); }
  function pct(a, b){ return b ? Math.round(a / b * 100) : 0; }
  function catStats(items){
    var st = { n:items.length, stars:0, active:0, new1y:0 };
    items.forEach(function(d){ st.stars += d.stars; if(d.fresh) st.active++; if(d.newIn1y) st.new1y++; });
    st.activeRate = st.n ? st.active / st.n : 0;
    return st;
  }

  function kpiHtml(items){
    var st = catStats(items);
    var official = items.filter(function(d){ return d.official; }).length;
    function tile(label, value, note){
      return '<div class="kpi"><div class="label">' + label + '</div><div class="value">' + value + '</div>' +
        (note ? '<div class="note">' + note + '</div>' : '') + '</div>';
    }
    return '<div class="kpis">' +
      tile('项目数', fmtInt(st.n), '') +
      tile('Star 总量', fmtStars(st.stars), '') +
      tile('近 30 天有更新', pct(st.active, st.n) + '%', st.active + ' 个项目') +
      tile('近一年新建', fmtInt(st.new1y), '占 ' + pct(st.new1y, st.n) + '%') +
      tile('官方出品', fmtInt(official), '占 ' + pct(official, st.n) + '%') +
    '</div>';
  }

  function categoryHtml(items){
    var bySub = {};
    items.forEach(function(d){ (bySub[d.category] = bySub[d.category] || []).push(d); });
    var rows = TAXONOMY.map(function(major){
      var subs = major.subs.map(function(sub){
        return { key:sub.key, label:sub.label, st:catStats(bySub[sub.key] || []) };
      }).filter(function(r){ return r.st.n > 0; });
      var all = [];
      major.subs.forEach(function(sub){ all = all.concat(bySub[sub.key] || []); });
      return { key:major.key, label:major.label, st:catStats(all), subs:subs };
    }).filter(function(r){ return r.st.n > 0; });
    if(!rows.length) return '';

    var sortVal = { n:function(r){ return r.st.n; }, stars:function(r){ return r.st.stars; },
                    active:function(r){ return r.st.activeRate; }, new1y:function(r){ return r.st.new1y; } };
    if(catSort){
      var f = sortVal[catSort];
      var cmp = function(a, b){ return f(b) - f(a); };
      rows.sort(cmp);
      rows.forEach(function(r){ r.subs.sort(cmp); });
    }
    // 大类、小类共用同一个比例尺，小类条形短是真实的，不做单独缩放
    var maxN = Math.max.apply(null, rows.map(function(r){ return r.st.n; }));
    var maxStars = Math.max.apply(null, rows.map(function(r){ return r.st.stars; }));

    function cells(st){
      return '' +
        '<div class="hbar"><div class="track"><div class="fill" style="width:' + (st.n / maxN * 100) + '%"></div></div><span class="v">' + st.n + '</span></div>' +
        '<div class="hbar"><div class="track"><div class="fill" style="width:' + (st.stars / maxStars * 100) + '%"></div></div><span class="v">' + fmtStars(st.stars) + '</span></div>' +
        '<div class="meter"><div class="track"><div class="fill" style="width:' + (st.activeRate * 100) + '%"></div></div><span class="v">' + Math.round(st.activeRate * 100) + '%</span></div>' +
        '<div class="num">' + st.new1y + '</div>';
    }
    function head(key, label){
      return '<button type="button" data-cat-sort="' + key + '"' + (catSort === key ? ' aria-sort="descending"' : '') + '>' + label + '</button>';
    }
    var allOpen = rows.every(function(r){ return expandedCatMajors.has(r.key); });
    var html = '<div class="cat-tools"><button type="button" class="toc-btn" id="catExpandAll">' + (allOpen ? '收起全部小类' : '展开全部小类') + '</button></div>' +
      '<div class="cat-scroll"><div class="cat-table">' +
      '<div class="cat-row head">' + head('', '分类') + head('n', '项目数') + head('stars', 'Star 总量') + head('active', '近 30 天有更新') + head('new1y', '近一年新建') + '</div>';
    rows.forEach(function(r){
      var open = expandedCatMajors.has(r.key);
      html += '<div class="cat-row major' + (open ? '' : ' collapsed') + '">' +
        '<div class="cat-name"><button class="toc-caret" type="button" data-cat-toggle="' + r.key + '" aria-label="展开/收起小类">▾</button>' + r.label + '</div>' +
        cells(r.st) + '</div>';
      if(open){
        r.subs.forEach(function(sub){
          html += '<div class="cat-row sub"><div class="cat-name">' + sub.label +
            '<button type="button" class="cat-goto" data-goto-sub="' + sub.key + '">看项目 →</button></div>' + cells(sub.st) + '</div>';
        });
      }
    });
    return html + '</div></div>';
  }

  function quarterKey(dateStr){
    var y = +dateStr.slice(0, 4), q = Math.floor((+dateStr.slice(5, 7) - 1) / 3) + 1;
    return { y:y, q:q, idx:y * 4 + q - 1 };
  }

  function quarterChartHtml(items){
    var START_Y = 2022;
    var endQ = quarterKey(REF.toISOString().slice(0, 10));
    var buckets = [];
    for(var i = START_Y * 4; i <= endQ.idx; i++) buckets.push({ idx:i, y:Math.floor(i / 4), q:i % 4 + 1, items:[] });
    var earlier = 0;
    items.forEach(function(d){
      var k = quarterKey(d.created);
      if(k.y < START_Y){ earlier++; return; }
      buckets[k.idx - START_Y * 4].items.push(d);
    });
    var inMajor = function(d){ return highlightMajor && SUB_INFO[d.category].major === highlightMajor; };
    var maxV = Math.max.apply(null, buckets.map(function(b){ return b.items.length; }));
    if(maxV === 0) return '<div class="viz-empty">当前筛选下没有 ' + START_Y + ' 年以后创建的项目</div>';
    var step = maxV <= 10 ? 2 : maxV <= 25 ? 5 : 10;
    var yMax = Math.ceil(maxV / step) * step;

    var W = Math.max(320, Math.min(analysisEl.clientWidth || 900, 1180) - 38);
    var H = 230, padL = 30, padR = 6, padT = 12, padB = 26;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var slot = plotW / buckets.length, barW = Math.min(24, slot * 0.62);
    var y = function(v){ return padT + plotH - v / yMax * plotH; };

    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" height="' + H + '" role="img" aria-label="各季度新建项目数">';
    for(var t = 0; t <= yMax; t += step){
      svg += '<line class="grid" x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(t) + '" y2="' + y(t) + '"/>' +
        '<text x="' + (padL - 6) + '" y="' + (y(t) + 3.5) + '" text-anchor="end">' + t + '</text>';
    }
    buckets.forEach(function(b, i){
      var cx = padL + slot * (i + 0.5), x0 = cx - barW / 2;
      var total = b.items.length, hi = b.items.filter(inMajor).length;
      // 柱子：底部 4px 以上的圆角只放在数据端；高亮大类在下、其余灰色在上，中间留 2px 表面色间隙
      function colPx(top, bot, color, roundTop){
        if(bot - top < 0.5) return '';
        var r = roundTop ? Math.min(4, (bot - top) / 2, barW / 2) : 0;
        return '<path fill="' + color + '" d="M' + x0 + ',' + bot + 'V' + (top + r) +
          (r ? 'Q' + x0 + ',' + top + ' ' + (x0 + r) + ',' + top + 'H' + (x0 + barW - r) + 'Q' + (x0 + barW) + ',' + top + ' ' + (x0 + barW) + ',' + (top + r) : 'H' + (x0 + barW)) +
          'V' + bot + 'Z"/>';
      }
      var col = '';
      if(highlightMajor){
        // 高亮大类在下、其余分类灰色在上，中间留 2px 表面色间隙；圆角只放在柱子最顶端
        if(hi > 0) col += colPx(y(hi), y(0), 'var(--accent)', hi === total);
        if(total > hi) col += colPx(y(total), hi > 0 ? y(hi) - 2 : y(0), 'var(--viz-gray)', true);
      } else {
        col += colPx(y(total), y(0), 'var(--accent)', true);
      }
      if(b.q === 1) svg += '<text x="' + cx + '" y="' + (H - 8) + '" text-anchor="middle">' + b.y + '</text>';
      var top3 = b.items.slice().sort(function(a, c){ return c.stars - a.stars; }).slice(0, 3);
      var tip = '<b>' + b.y + ' Q' + b.q + '</b> · 新建 ' + total + ' 个' +
        (highlightMajor ? '<br>其中「' + TAXONOMY.filter(function(m){ return m.key === highlightMajor; })[0].label + '」' + hi + ' 个' : '') +
        (top3.length ? '<br><span class="m">Star 最多：</span>' + top3.map(function(d){ return d.name; }).join('、') : '');
      // 整个柱位是悬停区（比柱子宽），悬停底色画在柱子后面
      svg += '<g class="qcol" data-tip="' + esc(tip) + '"><rect class="hit" x="' + (padL + slot * i) + '" y="' + padT + '" width="' + slot + '" height="' + plotH + '"/>' + col + '</g>';
    });
    svg += '<line class="grid" x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(0) + '" y2="' + y(0) + '" style="stroke:var(--text-muted)"/>';
    svg += '</svg>';

    var opts = '<option value="">不高亮</option>' + TAXONOMY.map(function(m){
      return '<option value="' + m.key + '"' + (m.key === highlightMajor ? ' selected' : '') + '>' + m.label + '</option>';
    }).join('');
    var legend = highlightMajor
      ? '<div class="legend"><span><i style="background:var(--accent)"></i>' + TAXONOMY.filter(function(m){ return m.key === highlightMajor; })[0].label + '</span><span><i style="background:var(--viz-gray)"></i>其他分类</span></div>'
      : '';
    return '<div class="viz-toolbar">高亮大类 <select id="qHighlight">' + opts + '</select></div>' + legend +
      '<div class="qchart">' + svg + '</div>' +
      (earlier ? '<div class="viz-sub" style="margin:8px 0 0">另有 ' + earlier + ' 个项目创建于 ' + START_Y + ' 年之前，未画入图中。</div>' : '');
  }

  function langChartHtml(items){
    var cohorts = [
      { label:'2022 及以前', test:function(y){ return y <= 2022; } },
      { label:'2023', test:function(y){ return y === 2023; } },
      { label:'2024', test:function(y){ return y === 2024; } },
      { label:'2025', test:function(y){ return y === 2025; } },
      { label:'2026', test:function(y){ return y === 2026; } },
    ];
    var keys = TOP_LANGS.concat(['其他']);
    var color = function(i){ return i < TOP_LANGS.length ? 'var(--lang-' + (i + 1) + ')' : 'var(--lang-other)'; };
    var legend = '<div class="legend">' + keys.map(function(k, i){
      return '<span><i style="background:' + color(i) + '"></i>' + (k === '其他' ? '其他' : langLabel(k)) + '</span>';
    }).join('') + '</div>';
    var rowsHtml = cohorts.map(function(c){
      var group = items.filter(function(d){ return c.test(+d.created.slice(0, 4)); });
      if(!group.length) return '';
      var counts = keys.map(function(){ return 0; });
      group.forEach(function(d){
        var i = TOP_LANGS.indexOf(d.primaryLang);
        counts[i === -1 ? keys.length - 1 : i]++;
      });
      var segs = counts.map(function(n, i){
        if(!n) return '';
        var share = n / group.length * 100;
        var others = '';
        if(i === keys.length - 1){
          var oc = {};
          group.forEach(function(d){ if(TOP_LANGS.indexOf(d.primaryLang) === -1) oc[d.primaryLang] = (oc[d.primaryLang] || 0) + 1; });
          others = '<br><span class="m">' + Object.keys(oc).sort(function(a, b){ return oc[b] - oc[a]; }).slice(0, 6)
            .map(function(l){ return l + ' ' + oc[l]; }).join('、') + '</span>';
        }
        var tip = '<b>' + c.label + ' · ' + (keys[i] === '其他' ? '其他' : langLabel(keys[i])) + '</b><br>' + n + ' 个，占 ' + Math.round(share) + '%' + others;
        return '<div class="seg' + (i === keys.length - 1 ? ' other' : '') + '" style="flex:' + n + ' 1 0;background:' + color(i) + '" data-tip="' + esc(tip) + '">' +
          '<span>' + Math.round(share) + '%</span></div>';
      }).join('');
      return '<div class="stack-row"><span class="y">' + c.label + '</span><div class="stack">' + segs + '</div><span class="n">' + group.length + '</span></div>';
    }).join('');
    return legend + '<div class="stack-rows">' + rowsHtml + '</div>';
  }

  function orgHtml(items){
    var byOrg = {};
    items.forEach(function(d){ if(d.official) (byOrg[d.officialOrg] = byOrg[d.officialOrg] || []).push(d); });
    var orgs = Object.keys(byOrg).sort(function(a, b){ return byOrg[b].length - byOrg[a].length || a.localeCompare(b); }).slice(0, 10);
    if(!orgs.length) return '<div class="viz-empty">当前筛选下没有官方出品的项目</div>';
    var max = byOrg[orgs[0]].length;
    return '<div class="org-list">' + orgs.map(function(o){
      var list = byOrg[o].slice().sort(function(a, b){ return b.stars - a.stars; });
      var tip = '<b>' + o + '</b> · ' + list.length + ' 个<br><span class="m">' + list.map(function(d){ return d.name.split('/')[1]; }).join('、') + '</span>';
      return '<div class="org-row" data-tip="' + esc(tip) + '"><span class="o">' + o + '</span>' +
        '<div class="hbar"><div class="track"><div class="fill" style="width:' + (list.length / max * 100) + '%"></div></div><span class="v">' + list.length + '</span></div></div>';
    }).join('') + '</div>';
  }

  function staleHtml(items){
    var list = items.filter(function(d){ return d.freshDays > 180; })
      .sort(function(a, b){ return b.stars - a.stars; }).slice(0, 10);
    if(!list.length) return '<div class="viz-empty">当前筛选下没有超过半年未更新的项目</div>';
    return '<div class="cat-scroll"><table class="stale-table"><thead><tr><th>项目</th><th>分类</th><th class="r">Star</th><th class="r">最后推送</th><th class="r">未更新</th></tr></thead><tbody>' +
      list.map(function(d){
        return '<tr><td><a href="https://github.com/' + d.name + '" target="_blank" rel="noopener">' + d.name + '</a></td>' +
          '<td class="muted">' + SUB_INFO[d.category].label + '</td><td class="r">' + fmtStars(d.stars) + '</td>' +
          '<td class="r muted">' + d.pushed + '</td><td class="r">' + Math.round(d.freshDays) + ' 天</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  function renderAnalysis(items){
    lastMatched = items;
    if(!items.length){
      analysisEl.innerHTML = '<div class="empty-state">没有符合当前筛选条件的项目</div>';
      return;
    }
    analysisEl.innerHTML = '' +
      kpiHtml(items) +
      '<section class="viz-card"><h2>分类概览</h2><p class="viz-sub">各分类的规模与活跃度。点表头按该列排序，点 ▾ 展开小类；条形长度大类和小类共用同一比例尺。</p>' + categoryHtml(items) + '</section>' +
      '<section class="viz-card"><h2>各季度新建项目数</h2><p class="viz-sub">按仓库创建时间统计。可选一个大类高亮，看它在不同时期的占比。注意：这里只统计已进入 GitHub 全站 Top2000 的项目，最近一两个季度新建的项目大多还没积累到这个门槛，所以柱子偏低不代表新项目变少。</p>' + quarterChartHtml(items) + '</section>' +
      '<div class="viz-cols" style="margin-top:16px">' +
        '<section class="viz-card"><h2>主要语言的变化</h2><p class="viz-sub">按创建年份分组，每个项目取代码量最大的语言。</p>' + langChartHtml(items) + '</section>' +
        '<section class="viz-card"><h2>官方出品（按公司）</h2><p class="viz-sub">仓库归属公司官方组织的项目数，前 10 名。悬停查看项目。</p>' + orgHtml(items) + '</section>' +
      '</div>' +
      '<section class="viz-card"><h2>高 Star 但半年以上未更新</h2><p class="viz-sub">最近一次代码推送距今超过 180 天，按 Star 排序前 10。多为已完结的模型发布、教程或停止维护的早期项目。</p>' + staleHtml(items) + '</section>';
    analysisEl.querySelectorAll('.stack .seg span').forEach(function(label){
      if(label.offsetWidth + 8 > label.parentNode.clientWidth) label.remove();
    });
  }

  analysisEl.addEventListener('click', function(e){
    var sortBtn = e.target.closest('[data-cat-sort]');
    if(sortBtn){ catSort = sortBtn.dataset.catSort || null; renderAnalysis(lastMatched); return; }
    var tog = e.target.closest('[data-cat-toggle]');
    if(tog){
      var k = tog.dataset.catToggle;
      if(expandedCatMajors.has(k)) expandedCatMajors.delete(k); else expandedCatMajors.add(k);
      renderAnalysis(lastMatched); return;
    }
    if(e.target.id === 'catExpandAll'){
      var allOpen = TAXONOMY.every(function(m){ return expandedCatMajors.has(m.key); });
      TAXONOMY.forEach(function(m){ if(allOpen) expandedCatMajors.delete(m.key); else expandedCatMajors.add(m.key); });
      renderAnalysis(lastMatched); return;
    }
    var go = e.target.closest('[data-goto-sub]');
    if(go){
      filters.categories.clear();
      filters.categories.add(go.dataset.gotoSub);
      syncCategoryDropdown();
      setView('cards');
      window.scrollTo(0, document.getElementById('groupsContainer').offsetTop - 16);
    }
  });
  analysisEl.addEventListener('change', function(e){
    if(e.target.id === 'qHighlight'){ highlightMajor = e.target.value; renderAnalysis(lastMatched); }
  });

  var tipEl = document.createElement('div');
  tipEl.className = 'viz-tip';
  tipEl.hidden = true;
  document.body.appendChild(tipEl);
  analysisEl.addEventListener('mousemove', function(e){
    var t = e.target.closest('[data-tip]');
    if(!t){ tipEl.hidden = true; return; }
    tipEl.innerHTML = t.getAttribute('data-tip');
    tipEl.hidden = false;
    var x = e.clientX + 14, y = e.clientY + 14;
    if(x + tipEl.offsetWidth > window.innerWidth - 8) x = e.clientX - tipEl.offsetWidth - 14;
    if(y + tipEl.offsetHeight > window.innerHeight - 8) y = e.clientY - tipEl.offsetHeight - 14;
    tipEl.style.left = Math.max(8, x) + 'px';
    tipEl.style.top = Math.max(8, y) + 'px';
  });
  analysisEl.addEventListener('mouseleave', function(){ tipEl.hidden = true; });

  var resizeTimer;
  window.addEventListener('resize', function(){
    if(currentView !== 'analysis') return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){ renderAnalysis(lastMatched); }, 150);
  });

  function setView(v, remember){
    currentView = v;
    root.classList.toggle('view-analysis', v === 'analysis');
    document.querySelectorAll('.view-switch button').forEach(function(b){
      b.setAttribute('aria-pressed', String(b.dataset.view === v));
    });
    if(remember){ try { localStorage.setItem('topk.view', v); } catch(e){} }
    tipEl.hidden = true;
    render();
  }
  document.querySelectorAll('.view-switch button').forEach(function(b){
    b.addEventListener('click', function(){ setView(b.dataset.view, true); });
  });

  function render(){
    var container = document.getElementById('groupsContainer');
    var matched = data.filter(matchesFilters);

    var html = '';
    var tocHtml = '';
    TAXONOMY.forEach(function(major){
      var majorShown = 0;
      var subsHtml = '';
      var tocSubs = '';
      major.subs.forEach(function(sub){
        if(filters.categories.size > 0 && !filters.categories.has(sub.key)) return;
        var items = sortItems(matched.filter(function(d){ return d.category === sub.key; }));
        if(items.length === 0) return;
        majorShown += items.length;
        var totalInCategory = categoryCounts[sub.key];
        var countLabel = items.length < totalInCategory ? (items.length + ' / ' + totalInCategory + ' 个') : (totalInCategory + ' 个');
        tocSubs += '<a href="#sub-' + sub.key + '" data-sub="' + sub.key + '"><span>' + sub.label + '</span><span class="n">' + items.length + '</span></a>';
        subsHtml += '' +
          '<section class="group" id="sub-' + sub.key + '">' +
            '<div class="group-head">' +
              '<h3>' + sub.label + '</h3>' +
              '<span class="count">' + countLabel + '</span>' +
              '<div class="def">' + sub.def + '</div>' +
            '</div>' +
            '<div class="grid">' + items.map(cardHtml).join('') + '</div>' +
          '</section>';
      });
      if(majorShown === 0) return;
      var majorTotal = majorCount(major);
      var majorLabel = majorShown < majorTotal ? (majorShown + ' / ' + majorTotal + ' 个') : (majorTotal + ' 个');
      tocHtml += '' +
        '<div class="toc-major' + (collapsedMajors.has(major.key) ? ' collapsed' : '') + '" data-major="' + major.key + '">' +
          '<div class="toc-major-row">' +
            '<button class="toc-caret" type="button" aria-label="展开/收起小类">▾</button>' +
            '<a href="#major-' + major.key + '"><span>' + major.label + '</span><span class="n">' + majorShown + '</span></a>' +
          '</div>' +
          '<div class="toc-subs">' + tocSubs + '</div>' +
        '</div>';
      html += '' +
        '<section class="major" id="major-' + major.key + '">' +
          '<div class="major-head">' +
            '<h2>' + major.label + '</h2>' +
            '<span class="count">' + majorLabel + '</span>' +
            '<div class="def">' + major.def + '</div>' +
          '</div>' +
          subsHtml +
        '</section>';
    });

    container.innerHTML = html || '<div class="empty-state">没有符合当前筛选条件的项目</div>';
    document.getElementById('tocBody').innerHTML = tocHtml;
    updateTocCurrent();
    if(currentView === 'analysis'){
      renderAnalysis(filters.categories.size > 0
        ? matched.filter(function(d){ return filters.categories.has(d.category); })
        : matched);
    }
    updateResetVisibility();
  }

  document.querySelectorAll('.controls button').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.controls button').forEach(function(b){ b.setAttribute('aria-pressed','false'); });
      btn.setAttribute('aria-pressed','true');
      sortKey = btn.dataset.sort;
      render();
    });
  });

  var searchInput = document.getElementById('searchInput');
  var searchTimer;
  searchInput.addEventListener('input', function(){
    clearTimeout(searchTimer);
    var val = searchInput.value;
    searchTimer = setTimeout(function(){
      filters.q = val.trim();
      render();
    }, 120);
  });

  document.getElementById('resetFilters').addEventListener('click', function(){
    filters.q = '';
    filters.status.clear();
    filters.langs.clear();
    filters.categories.clear();
    filters.orgs.clear();
    searchInput.value = '';
    syncStatusDropdown();
    syncCategoryDropdown();
    syncOrgDropdown();
    syncLangDropdown();
    render();
  });

  var savedView = null;
  try { savedView = localStorage.getItem('topk.view'); } catch(e){}
  if(savedView === 'analysis') setView('analysis', false); else render();
  }
})();
