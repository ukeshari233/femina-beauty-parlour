/**
 * ==========================================================================
 * FEMINA BEAUTY PARLOUR - JAVASCRIPT
 * Features:
 * - Dynamic WhatsApp Link Encoding & Binding
 * - Mobile Navigation Toggle with ARIA State Management
 * - Sticky Header Scroll Detection
 * - Active Section Observer for Navigation
 * - Smooth Scroll with Header Offset
 * - Dynamic Current Year in Footer
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. BUSINESS CONSTANTS & CONFIGURATION
  // ------------------------------------------------------------------------
  const BUSINESS_CONFIG = {
    name: 'Femina Beauty Parlour',
    // Phone number in international format without spaces or plus sign:
    waNumber: '917007679073',
    googleMapsUrl: 'https://share.google/3h52yfz905pQsJLbH',
    instagramUrl: 'https://www.instagram.com/femina.parlour_?dlrf=MW1qOTFjeWRoajU2Yw=='
  };

  /**
   * Generates a fully encoded WhatsApp click-to-chat URL.
   * @param {string} rawMessage - Plain text message
   * @returns {string} - Complete wa.me URL
   */
  function createWhatsAppUrl(rawMessage) {
    return `https://wa.me/${BUSINESS_CONFIG.waNumber}?text=${encodeURIComponent(rawMessage)}`;
  }

  // Pre-configured standardized messages
  const WA_MESSAGES = {
    general: 'Hello Femina Beauty Parlour, I would like to make a general enquiry about your parlour services.',
    basicCourse: 'Hello Femina Beauty Parlour, I am interested in the Basic Beautician Course. Could you please share the syllabus, duration, and fees?',
    professionalCourse: 'Hello Femina Beauty Parlour, I am interested in the Professional Beauty Course. Could you please share the syllabus, duration, and fees?',
    appointment: 'Hello Femina Beauty Parlour, I would like to schedule a visit or appointment.',
    servicePricing: (serviceName) => `Hello Femina Beauty Parlour, I would like to know the pricing and details for ${serviceName}.`
  };

  // ------------------------------------------------------------------------
  // 2. ENCODE & ENSURE ALL WHATSAPP LINKS
  // ------------------------------------------------------------------------
  function setupWhatsAppLinks() {
    // 2a. Service Cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      const serviceName = card.getAttribute('data-service') || card.querySelector('.service-title')?.textContent?.trim();
      const waBtn = card.querySelector('.btn-card-wa');
      if (serviceName && waBtn) {
        waBtn.href = createWhatsAppUrl(WA_MESSAGES.servicePricing(serviceName));
      }
    });

    // 2b. Course Cards
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
      const courseTitle = card.querySelector('.course-name')?.textContent?.trim() || '';
      const waBtn = card.querySelector('.course-footer .btn');
      if (waBtn) {
        if (courseTitle.includes('Professional')) {
          waBtn.href = createWhatsAppUrl(WA_MESSAGES.professionalCourse);
        } else if (courseTitle.includes('Basic')) {
          waBtn.href = createWhatsAppUrl(WA_MESSAGES.basicCourse);
        }
      }
    });

    // 2c. Header WhatsApp Button
    const headerWaBtn = document.querySelector('.header-wa-btn');
    if (headerWaBtn) {
      headerWaBtn.href = createWhatsAppUrl(WA_MESSAGES.general);
    }

    // 2d. Floating WhatsApp Button
    const floatingWa = document.getElementById('floatingWa');
    if (floatingWa) {
      floatingWa.href = createWhatsAppUrl(WA_MESSAGES.general);
    }

    // 2e. Visiting Card WA Button
    const visitWaBtn = document.querySelector('.visit-card-inner .btn-primary');
    if (visitWaBtn) {
      visitWaBtn.href = createWhatsAppUrl(WA_MESSAGES.appointment);
    }
  }

  // ------------------------------------------------------------------------
  // 3. DYNAMIC FOOTER COPYRIGHT YEAR
  // ------------------------------------------------------------------------
  function updateCopyrightYear() {
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }

  // ------------------------------------------------------------------------
  // 4. MOBILE NAVIGATION TOGGLE & ACCESSIBILITY
  // ------------------------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  function openMobileNav() {
    navToggle.classList.add('active');
    navToggle.setAttribute('aria-expanded', 'true');
    mainNav.classList.add('nav-open');
  }

  function closeMobileNav() {
    navToggle.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('nav-open');
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navToggle.classList.contains('active');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileNav();
      });
    });

    // Close when clicking outside of the mobile nav
    document.addEventListener('click', (e) => {
      if (navToggle.classList.contains('active') && !mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        closeMobileNav();
      }
    });

    // Close when pressing the Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navToggle.classList.contains('active')) {
        closeMobileNav();
        navToggle.focus();
      }
    });
  }

  // ------------------------------------------------------------------------
  // 5. STICKY HEADER SCROLL SHADOW
  // ------------------------------------------------------------------------
  const header = document.getElementById('header');

  function handleHeaderScroll() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll(); // Initialize on load

  // ------------------------------------------------------------------------
  // 6. ACTIVE NAVIGATION LINK ON SCROLL (INTERSECTION OBSERVER)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(section => observer.observe(section));
    } else {
      // Fallback scroll listener
      window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }, { passive: true });
    }
  }

  // ------------------------------------------------------------------------
  // 7. SMOOTH SCROLL OFFSET FOR STICKY HEADER
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = header ? header.offsetHeight : 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Set focus to target for accessibility
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus({ preventScroll: true });
      }
    });
  });

  // ------------------------------------------------------------------------
  // 8. INITIALIZATION
  // ------------------------------------------------------------------------
  setupWhatsAppLinks();
  updateCopyrightYear();
  updateActiveNavLink();

});
