/* ============================================
   AGE VERIFICATION - COOKIE-BASED
   ============================================ */

(function() {
  'use strict';
  
  const AGE_VERIFIED_KEY = 'ageVerified';
  const ageOverlay = document.querySelector('.age-verification-overlay');
  const enterButton = document.querySelector('.btn-enter');
  const exitButton = document.querySelector('.btn-exit');
  
  // Check if user has already verified age
  function checkAgeVerification() {
    const ageVerified = localStorage.getItem(AGE_VERIFIED_KEY);
    
    if (!ageVerified) {
      // Show overlay if not verified
      if (ageOverlay) {
        ageOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    } else {
      // Hide overlay if already verified
      if (ageOverlay) {
        ageOverlay.classList.add('hidden');
      }
    }
  }
  
  // Handle "I am 21 or older" button
  function handleEnter() {
    localStorage.setItem(AGE_VERIFIED_KEY, 'true');
    if (ageOverlay) {
      ageOverlay.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }
  
  // Handle "I am under 21" button
  function handleExit() {
    // Redirect to a safe page or show message
    window.location.href = 'https://www.google.com';
  }
  
  // Initialize on page load
  function init() {
    checkAgeVerification();
    
    if (enterButton) {
      enterButton.addEventListener('click', handleEnter);
    }
    
    if (exitButton) {
      exitButton.addEventListener('click', handleExit);
    }
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

