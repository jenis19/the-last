/**
 * Brewster Footer JavaScript
 * Handles form validation and submission for the footer components
 */

class BrewsterFooter {
  constructor() {
    this.newsletterForm = document.querySelector('.footer-newsletter-form');
    this.contactForm = document.querySelector('.footer-contact-form');
    this.init();
  }

  init() {
    if (this.newsletterForm) {
      this.newsletterForm.addEventListener('submit', this.handleNewsletterSubmit.bind(this));
    }
    
    if (this.contactForm) {
      this.contactForm.addEventListener('submit', this.handleContactSubmit.bind(this));
    }
    
    // Add input validation listeners
    const formInputs = document.querySelectorAll('.form-field input, .form-field textarea');
    formInputs.forEach(input => {
      input.addEventListener('blur', this.validateField.bind(this));
    });
  }
  
  validateField(event) {
    const field = event.target;
    let isValid = true;
    const errorElement = this.getOrCreateErrorElement(field);
    
    // Clear previous errors
    errorElement.textContent = '';
    field.classList.remove('error');
    
    // Email validation
    if (field.type === 'email' && field.value.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(field.value)) {
        errorElement.textContent = 'Please enter a valid email address.';
        field.classList.add('error');
        isValid = false;
      }
    }
    
    // Required field validation
    if (field.hasAttribute('required') && field.value.trim() === '') {
      errorElement.textContent = 'This field is required.';
      field.classList.add('error');
      isValid = false;
    }
    
    return isValid;
  }
  
  getOrCreateErrorElement(field) {
    const formField = field.closest('.form-field');
    let errorElement = formField.querySelector('.field-error');
    
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'field-error';
      errorElement.style.color = '#d72c0d';
      errorElement.style.fontSize = '0.8rem';
      errorElement.style.marginTop = '5px';
      formField.appendChild(errorElement);
    }
    
    return errorElement;
  }
  
  validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      // Trigger validation for each field
      const fieldIsValid = this.validateField({ target: input });
      isValid = isValid && fieldIsValid;
    });
    
    return isValid;
  }
  
  handleNewsletterSubmit(event) {
    event.preventDefault();
    
    if (!this.validateForm(this.newsletterForm)) {
      return;
    }
    
    const emailInput = this.newsletterForm.querySelector('input[type="email"]');
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    this.showFormSuccess(this.newsletterForm, 'Thanks for subscribing to our newsletter!');
    
    // Clear the form
    emailInput.value = '';
  }
  
  handleContactSubmit(event) {
    event.preventDefault();
    
    if (!this.validateForm(this.contactForm)) {
      return;
    }
    
    const nameInput = this.contactForm.querySelector('input[name="contact[name]"]');
    const emailInput = this.contactForm.querySelector('input[name="contact[email]"]');
    const messageInput = this.contactForm.querySelector('textarea[name="contact[message]"]');
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    this.showFormSuccess(this.contactForm, 'Your message has been sent. We\'ll get back to you soon!');
    
    // Clear the form
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
  
  showFormSuccess(form, message) {
    // Create or update success message element
    let successElement = form.querySelector('.form-success');
    
    if (!successElement) {
      successElement = document.createElement('div');
      successElement.className = 'form-success';
      successElement.style.backgroundColor = 'rgba(168, 124, 63, 0.1)';
      successElement.style.color = '#a87c3f';
      successElement.style.padding = '12px 15px';
      successElement.style.borderRadius = '4px';
      successElement.style.marginTop = '15px';
      successElement.style.fontSize = '0.9rem';
      form.appendChild(successElement);
    }
    
    successElement.textContent = message;
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successElement.style.display = 'none';
    }, 5000);
  }
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  new BrewsterFooter();
}); 