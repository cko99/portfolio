/* ============================================================
   LUQMAN LATIF — GIS Portfolio
   script.js
   ============================================================ */

'use strict';

/* ============================================================
   NAVIGATION
   ============================================================ */
(function initNav() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const allPages = document.querySelectorAll('.page');

  function switchPage(targetId) {
    navBtns.forEach(b => b.classList.remove('active'));
    allPages.forEach(p => p.classList.remove('active'));

    const activeBtn = document.querySelector(`[data-page="${targetId}"]`);
    const activePage = document.getElementById(`page-${targetId}`);

    if (activeBtn) activeBtn.classList.add('active');
    if (activePage) {
      activePage.classList.add('active');
      animateBars(activePage);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.dataset.page));
  });

  // Keyboard navigation support
  document.addEventListener('keydown', e => {
    const active = document.querySelector('.nav-btn.active');
    const btns   = [...navBtns];
    const idx    = btns.indexOf(active);
    if (e.key === 'ArrowRight' && idx < btns.length - 1) switchPage(btns[idx + 1].dataset.page);
    if (e.key === 'ArrowLeft'  && idx > 0)                switchPage(btns[idx - 1].dataset.page);
  });
})();

/* ============================================================
   PROFICIENCY / SKILL BARS
   ============================================================ */
function animateBars(root) {
  root.querySelectorAll('.pm-fill, .sk-fill').forEach(bar => {
    bar.classList.remove('go');
    // Force reflow so CSS transition re-triggers
    void bar.offsetWidth;
    bar.style.width = (bar.dataset.w || 0) + '%';
    bar.classList.add('go');
  });
}

// Animate bars on initial home page load after a short delay
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => animateBars(document.getElementById('page-home')), 350);
  initCounters();
  initLayerToggles();
  initContactForm();
  initImageFallbacks();
});

/* ============================================================
   STAT COUNTERS
   ============================================================ */
function initCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const text    = el.textContent.trim();
    const match   = text.match(/^(\d+)/);
    if (!match) return;

    const target  = parseInt(match[1], 10);
    const suffix  = text.replace(match[1], '');
    const start   = performance.now();
    const dur     = 1000;

    function tick(now) {
      const p    = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

/* ============================================================
   LAYER TOGGLE CHECKBOXES (Hero Map)
   ============================================================ */
function initLayerToggles() {
  document.querySelectorAll('.hm-layer').forEach(layer => {
    layer.addEventListener('click', () => {
      const chk = layer.querySelector('.hm-chk');
      if (chk) chk.classList.toggle('on');
    });
  });
}

/* ============================================================
   CONTACT FORM — Inline submission feedback
   ============================================================ */
function initContactForm() {
  const cfBtn = document.getElementById('cfSubmit');
  if (!cfBtn) return;

  cfBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // Basic validation
    const nameEl    = document.getElementById('cf-name');
    const emailEl   = document.getElementById('cf-email');
    const messageEl = document.getElementById('cf-message');

    if (nameEl && !nameEl.value.trim()) { nameEl.focus(); return; }
    if (emailEl && !emailEl.value.trim()) { emailEl.focus(); return; }
    if (messageEl && !messageEl.value.trim()) { messageEl.focus(); return; }

    // Success state
    const orig = this.textContent;
    this.textContent = '✓ Message Sent';
    this.style.background = 'linear-gradient(135deg, #8a9a6e, #a3b18a)';
    this.disabled = true;

    setTimeout(() => {
      this.textContent = orig;
      this.style.background = '';
      this.disabled = false;
    }, 2500);
  });
}

/* ============================================================
   IMAGE FALLBACKS
   Replace broken <img> with surface-colored placeholder
   ============================================================ */
function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      this.style.visibility = 'hidden';
    });
  });
}

/* ============================================================
   INTERSECTION OBSERVER — Lazy animate bars when section enters view
   ============================================================ */
(function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateBars(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Observe all skill/proficiency containers
  document.querySelectorAll('.skill-card, .prof-mini').forEach(el => {
    observer.observe(el);
  });
})();
