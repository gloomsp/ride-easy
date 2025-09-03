// script.js
// This file adds interactive behaviour to the Ride‑Easy site. It manages
// a simple cart counter for bike selections and processes booking requests
// from the schedule section. Feel free to extend this logic—for example,
// saving cart items in localStorage or sending booking details to a backend
// service.

document.addEventListener('DOMContentLoaded', () => {
  // Cart functionality
  const cartCountElem = document.getElementById('cart-count');
  let cartCount = 0;
  const addButtons = document.querySelectorAll('.add-to-cart');

  addButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartCount += 1;
      cartCountElem.textContent = cartCount;
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

      // Build a mailto link to prefill an email to the company
      const subject = `RideEasy booking request: ${model}`;
      const body = `Hello RideEasy team,%0D%0A%0D%0AI would like to book the ${model} from ${startDate} to ${endDate}.%0D%0AMy contact email is ${email}.%0D%0A%0D%0AThank you!`;
      const mailtoLink = `mailto:info@ride-easy.rent?subject=${encodeURIComponent(subject)}&body=${body}`;

      // Open the mail client in a new window so the user can send the request
      window.open(mailtoLink, '_blank');
    });
  }
});