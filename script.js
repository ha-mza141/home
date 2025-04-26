// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Form Submission
document.getElementById('order-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  
  // Anti-bot hidden field check
  if (formData.get('website') !== "") {
    document.getElementById('form-message').textContent = "Spam detected. Submission blocked.";
    return;
  }
  
  // Simulate success
  document.getElementById('form-message').textContent = "Thank you! Your order has been submitted successfully. ✅";
  form.reset();
});
