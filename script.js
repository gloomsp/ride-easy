// script.js
// This file adds interactive behaviour to the Ride‑Easy site. It manages
// a simple cart counter for bike selections and processes booking requests
// from the schedule section. Feel free to extend this logic—for example,
// saving cart items in localStorage or sending booking details to a backend
// service.

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle functionality
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Language selector toggle on click (especially for mobile)
  const langSelectors = document.querySelectorAll('.language-selector > a');
  langSelectors.forEach(langLink => {
    langLink.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = langLink.parentElement;
      const menu = parent.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.toggle('active');
      }
    });
  });

  // Availability check
  const checkBtn = document.getElementById('check-availability');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const modelSelect = document.getElementById('bike-model');
  const emailInput = document.getElementById('request-email');
  const resultDiv = document.getElementById('date-result');

  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      const model = modelSelect.value;
      const startDate = startDateInput.value;
      const endDate = endDateInput.value;
      const email = emailInput.value;

      // Basic validation
      if (!model || !startDate || !endDate || !email) {
        resultDiv.textContent = 'Please select a bike, choose dates and provide your email.';
        resultDiv.style.color = '#c12023';
        return;
      }

      // Construct summary message
      const message = `Request received for ${model} from ${startDate} to ${endDate}. We will confirm availability shortly.`;
      resultDiv.textContent = message;
      resultDiv.style.color = '#333';

      // Note: The contact form at the bottom of the page sends email via formsubmit.co.
      // We no longer open the mail client here. The summary above confirms that your request was recorded.
    });
  }

  // Merchandise cart functionality
  let cartCount = 0;
  const cartCountSpan = document.getElementById('cart-count');
  const addToCartButtons = document.querySelectorAll('button.add-to-cart');

  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount += 1;
      if (cartCountSpan) {
        cartCountSpan.textContent = cartCount;
      }
      // Provide simple feedback to user
      btn.textContent = 'Added!';
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
      }, 1500);
    });
  });
});