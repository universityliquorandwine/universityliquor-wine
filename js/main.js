/* ============================================
   MAIN JAVASCRIPT - NAVIGATION & INTERACTIONS
   ============================================ */

(function() {
  'use strict';
  
  // ============================================
  // NAVIGATION - STICKY HEADER & MOBILE MENU
  // ============================================
  function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // Sticky navbar on scroll
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
    
    // Mobile menu toggle
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = mobileToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '1';
          spans[2].style.transform = '';
        }
      });
    }
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu) {
          navMenu.classList.remove('active');
          if (mobileToggle) {
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
          }
        }
      });
    });
    
    // Smooth scroll for anchor links
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }
  
  // ============================================
  // BACK TO TOP BUTTON
  // ============================================
  function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // ============================================
  // TESTIMONIALS CAROUSEL
  // ============================================
  function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const testimonials = document.querySelectorAll('.testimonial-item');
    
    if (!track || testimonials.length === 0) return;
    
    let currentIndex = 0;
    let isTransitioning = false;
    
    function moveToIndex(index) {
      if (isTransitioning) return;
      isTransitioning = true;
      
      // Calculate the translateX value
      const translateX = -index * 100;
      track.style.transform = `translateX(${translateX}%)`;
      
      // Reset transition flag after animation completes
      setTimeout(() => {
        isTransitioning = false;
      }, 800);
    }
    
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      moveToIndex(currentIndex);
    }
    
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      moveToIndex(currentIndex);
    }
    
    // Auto-rotate testimonials every 5 seconds
    if (testimonials.length > 1) {
      // Initialize to first testimonial
      moveToIndex(0);
      
      // Set up auto-rotation
      setInterval(nextTestimonial, 5000);
      
      // Optional: Add touch/swipe support for mobile
      let startX = 0;
      let currentX = 0;
      let isDragging = false;
      
      track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      });
      
      track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        currentX = e.touches[0].clientX;
      });
      
      track.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        
        const diffX = startX - currentX;
        if (Math.abs(diffX) > 50) {
          if (diffX > 0) {
            nextTestimonial();
          } else {
            prevTestimonial();
          }
        }
      });
    }
  }
  
  // ============================================
  // LAZY LOADING IMAGES
  // ============================================
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
  
  // ============================================
  // FORM VALIDATION
  // ============================================
  function initFormValidation() {
    const forms = document.querySelectorAll('form');
    const recipientEmails = 'universityliquorandwine@gmail.com,nashvillendg@gmail.com';
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
          } else {
            input.classList.remove('error');
          }
        });
        
        // Email validation
        const emailInputs = form.querySelectorAll('input[type="email"]');
        emailInputs.forEach(input => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (input.value && !emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('error');
          }
        });
        
        if (isValid) {
          // Check if it's a newsletter form or contact form
          const isNewsletterForm = form.classList.contains('newsletter-form');
          const isContactForm = form.classList.contains('contact-form');
          
          if (isNewsletterForm) {
            // Newsletter subscription
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput ? emailInput.value : '';
            const subject = encodeURIComponent('Newsletter Subscription');
            const body = encodeURIComponent(`New newsletter subscription:\n\nEmail: ${email}`);
            const mailtoLink = `mailto:${recipientEmails}?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
            alert('Thank you for subscribing! Your email client will open to confirm your subscription.');
          } else if (isContactForm) {
            // Contact form
            const nameInput = form.querySelector('#name') || form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('#email') || form.querySelector('input[name="email"]');
            const phoneInput = form.querySelector('#phone') || form.querySelector('input[name="phone"]');
            const subjectInput = form.querySelector('#subject') || form.querySelector('input[name="subject"]');
            const messageInput = form.querySelector('#message') || form.querySelector('textarea[name="message"]');
            
            const name = nameInput ? nameInput.value : '';
            const email = emailInput ? emailInput.value : '';
            const phone = phoneInput ? phoneInput.value : '';
            const subject = subjectInput ? subjectInput.value : 'Contact Form Submission';
            const message = messageInput ? messageInput.value : '';
            
            const emailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`;
            const encodedSubject = encodeURIComponent(subject);
            const encodedBody = encodeURIComponent(emailBody);
            const mailtoLink = `mailto:${recipientEmails}?subject=${encodedSubject}&body=${encodedBody}`;
            window.location.href = mailtoLink;
            alert('Thank you! Your message has been sent. Your email client will open to send the message.');
          } else {
            // Generic form
            alert('Thank you! Your message has been sent.');
          }
          
          form.reset();
        } else {
          alert('Please fill in all required fields correctly.');
        }
      });
    });
  }
  
  // ============================================
  // INQUIRE BUTTONS
  // ============================================
  function initInquireButtons() {
    const inquireButtons = document.querySelectorAll('.btn-inquire');
    
    inquireButtons.forEach(button => {
      // Skip if it's already a link
      if (button.tagName === 'A') return;
      
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Navigate to contact page
        window.location.href = 'contact.html';
      });
    });
  }
  
  // ============================================
  // INITIALIZE ALL FUNCTIONALITY
  // ============================================
  function init() {
    initNavigation();
    initBackToTop();
    initTestimonialsSlider();
    initLazyLoading();
    initFormValidation();
    initInquireButtons();
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

