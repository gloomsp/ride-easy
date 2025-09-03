/*
 * Client‑side script for the RideEasy landing page.
 * Currently minimal: handles a simple form submission alert.
 */

document.addEventListener('DOMContentLoaded', () => {
  /* Cart functionality */
  let cartCount = 0;
  const cartCountElement = document.getElementById('cart-count');
  const addButtons = document.querySelectorAll('.add-to-cart');
  addButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      cartCount += 1;
      if (cartCountElement) cartCountElement.textContent = cartCount;
    });
  });

  /* Calendar availability check */
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const checkBtn = document.getElementById('check-availability');
  const resultDiv = document.getElementById('date-result');
  if (checkBtn) {
    checkBtn.addEventListener('click', () => {
      const start = startDateInput?.value;
      const end = endDateInput?.value;
      if (start && end) {
        resultDiv.textContent = `Selected dates: ${start} to ${end}. We'll verify availability soon.`;
      } else {
        resultDiv.textContent = 'Please select both start and end dates.';
      }
    });
  }
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      // Simulate sending the form (no backend in this static demo)
      alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    });
  }
});