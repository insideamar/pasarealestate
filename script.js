/**
 * PASA REAL ESTATE PVT. LTD.
 * Premium Website JavaScript
 * Features: Preloader, Navigation, Scroll Reveal,
 *           Counter Animation, Portfolio Filter,
 *           FAQ Accordion, Form Handling, Scroll-to-top
 */

'use strict';

/* =============================================
   PRELOADER
   ============================================= */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const hidePreloader = () => {
    preloader.classList.add('hidden');
    preloader.addEventListener('transitionend', () => {
      preloader.remove();
    }, { once: true });
  };

  if (document.readyState === 'complete') {
    setTimeout(hidePreloader, 1800);
  } else {
    window.addEventListener('load', () => {
      setTimeout(hidePreloader, 1800);
    });
  }
}

/* =============================================
   NAVIGATION: Transparent → Solid on scroll
   ============================================= */
function initNavigation() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!header) return;

  // Initial state
  header.classList.add('transparent');

  function updateNav() {
    if (window.scrollY > 60) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
      header.classList.add('transparent');
    }
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  // Mobile menu toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      document.body.classList.toggle('menu-open', isOpen);
    });

    // Close on mobile link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });

    // Close on ESC
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
        hamburger.focus();
      }
    });

    // Close on backdrop click
    mobileMenu.addEventListener('click', e => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      }
    });
  }

  // Active nav link tracking
  const sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    let currentSection = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/* =============================================
   SCROLL REVEAL ANIMATIONS
   ============================================= */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOut(progress);
      const currentValue = Math.round(target * easedProgress);

      el.textContent = currentValue.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

/* =============================================
   PORTFOLIO FILTER
   ============================================= */
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      portfolioCards.forEach(card => {
        const category = card.dataset.category;
        const shouldShow = filter === 'all' || category === filter;

        if (shouldShow) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeInUp 0.4s ease both';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* =============================================
   FAQ ACCORDION
   ============================================= */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        // Close others (optional accordion behavior)
        faqItems.forEach(other => {
          if (other !== item && other.open) {
            other.open = false;
          }
        });
      }
    });
  });
}

/* =============================================
   FORM HANDLING
   ============================================= */
function initForms() {
  // Quote Form
  const quoteForm = document.getElementById('quoteForm');
  const quoteSuccess = document.getElementById('quoteSuccess');

  if (quoteForm && quoteSuccess) {
    quoteForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }
      handleFormSubmit(quoteForm, quoteSuccess);
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      handleFormSubmit(contactForm, contactSuccess);
    });
  }
}

function handleFormSubmit(form, successEl) {
  const submitBtn = form.querySelector('[type="submit"]');
  const originalContent = submitBtn.innerHTML;

  // Loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin" aria-hidden="true">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
    </svg>
    <span>Sending...</span>
  `;

  // Add spin animation inline
  const style = document.createElement('style');
  style.textContent = '@keyframes spin { to { transform: rotate(360deg); } } .spin { animation: spin 1s linear infinite; }';
  if (!document.querySelector('#spin-style')) {
    style.id = 'spin-style';
    document.head.appendChild(style);
  }

  // Simulate submission (replace with actual API call)
  setTimeout(() => {
    form.style.display = 'none';
    successEl.hidden = false;
    successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Reset form after delay
    setTimeout(() => {
      form.reset();
      form.style.display = '';
      successEl.hidden = true;
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalContent;
    }, 5000);
  }, 1500);
}

/* =============================================
   SCROLL TO TOP BUTTON
   ============================================= */
function initScrollToTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* =============================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const headerHeight = document.getElementById('header')?.offsetHeight || 72;
      const targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    });
  });
}

/* =============================================
   FOOTER YEAR
   ============================================= */
function initFooterYear() {
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
}

/* =============================================
   PARALLAX HERO (CSS fallback support)
   ============================================= */
function initHeroParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Check if CSS background-attachment: fixed is supported and working
  // (disabled on mobile for performance)
  if (window.innerWidth < 768) {
    heroBg.style.backgroundAttachment = 'scroll';
  }
}

/* =============================================
   ADD FADEUP KEYFRAME FOR PORTFOLIO FILTER
   ============================================= */
function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .portfolio-card { animation: fadeInUp 0.4s ease both; }
  `;
  document.head.appendChild(style);
}

/* =============================================
   HEADER ACTIVE STATE ON LOAD FOR HOME
   ============================================= */
function highlightHomeLink() {
  const homeLink = document.querySelector('.nav-link[href="#home"]');
  if (homeLink) homeLink.classList.add('active');
}

/* =============================================
   HERO PARTICLE EFFECT (lightweight)
   ============================================= */
function initParticles() {
  // Lightweight canvas particle effect removed for performance;
  // CSS gradient & overlay handles visual depth
}

/* =============================================
   SERVICE CARD HOVER 3D TILT EFFECT (subtle)
   ============================================= */
function initCardTilt() {
  const cards = document.querySelectorAll('.service-card');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -4;
      const rotateY = (x - centerX) / centerX * 4;

      card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* =============================================
   NOTIFICATION TOAST (lightweight helper)
   ============================================= */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
    background: ${type === 'success' ? '#25D366' : '#e53e3e'};
    color: white; padding: 12px 24px; border-radius: 8px;
    font-family: 'Lato', sans-serif; font-size: 0.9rem; font-weight: 600;
    z-index: 9999; box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    animation: toastIn 0.3s ease both;
    max-width: 90vw; text-align: center;
  `;
  toast.textContent = message;

  const style = document.createElement('style');
  style.textContent = '@keyframes toastIn { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }';
  document.head.appendChild(style);

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastIn 0.3s ease reverse both';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* =============================================
   PHONE NUMBER CLICK TRACKING (analytics hook)
   ============================================= */
function initPhoneTracking() {
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      // Analytics hook: replace with actual tracking
      console.info('[Pasa Real Estate] Phone call initiated:', link.href);
    });
  });
}

/* =============================================
   WHATSAPP FLOAT PULSE ON LOAD
   ============================================= */
function initWhatsAppFloat() {
  const waBtn = document.querySelector('.whatsapp-float');
  if (!waBtn) return;

  // Show tooltip briefly on first load
  setTimeout(() => {
    waBtn.style.transform = 'scale(1.12)';
    setTimeout(() => {
      waBtn.style.transform = '';
    }, 600);
  }, 3500);
}

/* =============================================
   OBSERVE STATS SECTION FOR COUNTER TRIGGER
   ============================================= */
function initStatsSection() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  // Stats cards reveal
  const statCards = statsSection.querySelectorAll('.stat-card');

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statCards.forEach((card, i) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, i * 100);
        });
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statObserver.observe(statsSection);
}

/* =============================================
   PERFORMANCE: IMAGE LAZY LOAD SUPPORT
   ============================================= */
function initLazyImages() {
  // Native lazy loading for browsers that support it
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    // Already handled natively; this is a hook for polyfills if needed
  });
}

/* =============================================
   INITIALIZE ALL FEATURES
   ============================================= */
function init() {
  initPreloader();
  initNavigation();
  initScrollReveal();
  initCounters();
  initPortfolioFilter();
  initFAQ();
  initForms();
  initScrollToTop();
  initSmoothScroll();
  initFooterYear();
  initHeroParallax();
  addDynamicStyles();
  highlightHomeLink();
  initCardTilt();
  initPhoneTracking();
  initWhatsAppFloat();
  initStatsSection();
  initLazyImages();
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
