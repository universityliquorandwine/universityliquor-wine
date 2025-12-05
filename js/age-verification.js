/* ============================================
   AGE VERIFICATION - LOCALSTORAGE-BASED
   Shows only once per user (first visit)
   ============================================ */

(function() {
  'use strict';
  
  const AGE_VERIFIED_KEY = 'ageVerified';
  
  // Check localStorage immediately (before DOM is ready)
  function checkAgeVerificationImmediate() {
    const ageVerified = localStorage.getItem(AGE_VERIFIED_KEY);
    
    // If already verified, hide overlay immediately via inline style
    if (ageVerified === 'true') {
      // Add style tag to hide overlay before DOM loads
      const style = document.createElement('style');
      style.textContent = '.age-verification-overlay { display: none !important; }';
      document.head.appendChild(style);
    }
  }
  
  // Check if user has already verified age
  function checkAgeVerification() {
    const ageVerified = localStorage.getItem(AGE_VERIFIED_KEY);
    const ageOverlay = document.querySelector('.age-verification-overlay');
    
    if (ageVerified === 'true') {
      // Hide overlay if already verified
      if (ageOverlay) {
        ageOverlay.classList.add('hidden');
        ageOverlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
      }
    } else {
      // Show overlay if not verified
      if (ageOverlay) {
        ageOverlay.classList.remove('hidden');
        ageOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    }
  }
  
  // Handle "I am 21 or older" button
  function handleEnter() {
    localStorage.setItem(AGE_VERIFIED_KEY, 'true');
    const ageOverlay = document.querySelector('.age-verification-overlay');
    if (ageOverlay) {
      ageOverlay.classList.add('hidden');
      ageOverlay.style.display = 'none';
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
    
    const enterButton = document.querySelector('.btn-enter');
    const exitButton = document.querySelector('.btn-exit');
    
    if (enterButton) {
      enterButton.addEventListener('click', handleEnter);
    }
    
    if (exitButton) {
      exitButton.addEventListener('click', handleExit);
    }
  }
  
  // Check immediately (runs as soon as script loads)
  checkAgeVerificationImmediate();
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

