/* Take Back Your Data — main.js */

/* ============================================================
   DARK MODE TOGGLE
   ============================================================ */
function initDarkMode() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  const stored = localStorage.getItem('tbyd-theme');
  if (stored) document.documentElement.setAttribute('data-theme', stored);

  function isDark() {
    const t = document.documentElement.getAttribute('data-theme');
    if (t === 'dark') return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function updateIcon() {
    btn.textContent = isDark() ? '○' : '◐';
    btn.setAttribute('aria-label', isDark() ? 'Switch to light mode' : 'Switch to dark mode');
  }

  btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tbyd-theme', next);
    updateIcon();
  });

  updateIcon();
}

/* ============================================================
   READING PROGRESS BAR
   ============================================================ */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  const body = document.querySelector('.essay-body');
  if (!bar || !body) return;

  function update() {
    const bodyRect = body.getBoundingClientRect();
    const bodyTop = body.offsetTop;
    const bodyH = body.offsetHeight;
    const scrolled = window.scrollY - bodyTop + window.innerHeight * 0.1;
    const pct = Math.max(0, Math.min(100, (scrolled / bodyH) * 100));
    bar.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   READING TIME
   ============================================================ */
function initReadingTime() {
  // Essay page: calculate from live DOM
  const bodyEl = document.querySelector('.essay-body');
  const rtEl = document.querySelector('.reading-time-value');
  if (bodyEl && rtEl) {
    const words = bodyEl.innerText.trim().split(/\s+/).length;
    const mins = Math.ceil(words / 220);
    rtEl.textContent = mins + ' min read';
  }

  // Card reading times (from data-words attribute on listing pages)
  document.querySelectorAll('.essay-reading-time[data-words]').forEach(el => {
    const words = parseInt(el.dataset.words, 10);
    if (words) el.textContent = Math.ceil(words / 220) + ' min read';
  });
}

/* ============================================================
   AUTO TABLE OF CONTENTS + SCROLL SPY
   ============================================================ */
function initToC() {
  const tocList = document.getElementById('toc-list');
  const body = document.querySelector('.essay-body');
  const sidebar = document.querySelector('.toc-sidebar');
  if (!tocList || !body || !sidebar) return;

  const headings = Array.from(body.querySelectorAll('h2, h3'));
  if (headings.length < 2) { sidebar.style.display = 'none'; return; }

  // Give headings IDs if missing
  headings.forEach((h, i) => {
    if (!h.id) {
      h.id = 'section-' + i + '-' + h.textContent.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
  });

  // Build ToC
  headings.forEach(h => {
    const li = document.createElement('li');
    if (h.tagName === 'H3') li.classList.add('toc-h3');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // Scroll spy via IntersectionObserver
  const links = tocList.querySelectorAll('a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('toc-active'));
        const active = tocList.querySelector(`a[href="#${entry.target.id}"]`);
        active?.classList.add('toc-active');
      }
    });
  }, { rootMargin: '-5% 0% -80% 0%', threshold: 0 });

  headings.forEach(h => observer.observe(h));
}

/* ============================================================
   TAG FILTERING (essays listing page)
   ============================================================ */
function initTagFilter() {
  const filterBtns = document.querySelectorAll('.tag-filter .tag');
  const cards = document.querySelectorAll('.essay-card[data-tags]');
  const noResults = document.querySelector('.no-results');
  if (!filterBtns.length) return;

  let active = null;

  function applyFilter() {
    let visible = 0;
    cards.forEach(card => {
      const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];
      const show = !active || tags.includes(active);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.tag;
      if (active === val) {
        active = null;
        filterBtns.forEach(b => b.classList.remove('active'));
      } else {
        active = val;
        filterBtns.forEach(b => b.classList.toggle('active', b.dataset.tag === val));
      }
      applyFilter();
    });
  });

  // Allow URL hash to pre-filter: /essays/#economics
  const hash = window.location.hash.slice(1);
  if (hash) {
    const match = [...filterBtns].find(b => b.dataset.tag === hash);
    if (match) match.click();
  }
}

/* ============================================================
   SEARCH (essays listing page)
   ============================================================ */
function initSearch() {
  const input = document.querySelector('.search-input');
  const cards = document.querySelectorAll('.essay-card');
  const noResults = document.querySelector('.no-results');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    let visible = 0;
    cards.forEach(card => {
      const title = card.querySelector('.essay-card-title')?.textContent.toLowerCase() || '';
      const sub = card.querySelector('.essay-card-subtitle')?.textContent.toLowerCase() || '';
      const tags = card.dataset.tags?.toLowerCase() || '';
      const show = !q || title.includes(q) || sub.includes(q) || tags.includes(q);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  });
}

/* ============================================================
   SHARE BUTTON
   ============================================================ */
function initShare() {
  const btn = document.querySelector('.share-btn');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    const title = document.querySelector('h1')?.textContent?.trim() || document.title;
    const url = window.location.href;

    if (navigator.share) {
      try { await navigator.share({ title, url }); } catch (_) {}
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        const orig = btn.innerHTML;
        btn.textContent = 'Link copied!';
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
      } catch (_) {}
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initProgressBar();
  initReadingTime();
  initToC();
  initTagFilter();
  initSearch();
  initShare();
});
