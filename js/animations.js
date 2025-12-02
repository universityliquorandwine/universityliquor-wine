/* ============================================
   SCROLL ANIMATIONS - INTERSECTION OBSERVER
   ============================================ */

(function() {
  'use strict';
  
  // Intersection Observer options
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  // Fade in on scroll animation
  function initFadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in-on-scroll, .stagger-animation');
    
    if (elements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    elements.forEach(element => {
      observer.observe(element);
    });
  }
  
  // Animate product cards with stagger
  function initProductCardAnimations() {
    const productCards = document.querySelectorAll('.product-card, .feature-card');
    
    if (productCards.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100); // Stagger delay
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    productCards.forEach(card => {
      observer.observe(card);
    });
  }
  
  // Parallax effect for hero section (optimized with requestAnimationFrame)
  function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const heroBackground = hero.querySelector('.hero-background');
    if (!heroBackground) return;
    
    let ticking = false;
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const heroHeight = hero.offsetHeight;
      
      // Only apply parallax if hero is in viewport
      if (scrolled < heroHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      ticking = false;
    }
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    });
  }
  
  // Initialize all animations
  function init() {
    initFadeInOnScroll();
    initProductCardAnimations();
    initParallax();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

