document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', function() {
      nav.classList.toggle('nav-active');
      this.classList.toggle('active');
    });
  }
  
  // Header scroll behavior
  const header = document.querySelector('.header');
  let lastScrollTop = 0;
  let ticking = false;
  
  function updateHeaderOnScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class when scrolling down
    if (scrollTop > 50) {
      header.classList.add('scrolled');
      header.style.backgroundColor = 'rgba(0,0,0,0.95)';
    } else {
      header.classList.remove('scrolled');
      // Only make transparent if on homepage
      if (document.body.classList.contains('template-index')) {
        header.style.backgroundColor = 'rgba(0,0,0,0.7)';
      } else {
        header.style.backgroundColor = 'rgba(0,0,0,0.85)';
      }
    }
    
    // Store current scroll position
    lastScrollTop = scrollTop;
    ticking = false;
  }
  
  // Add scroll event listener with throttling for performance
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateHeaderOnScroll();
      });
      ticking = true;
    }
  }, { passive: true });
  
  // Initialize header state
  updateHeaderOnScroll();
}); 