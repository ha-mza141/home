// services.js

// Simple Image Slider Logic
document.querySelectorAll('.slider').forEach(slider => {
  let images = slider.querySelectorAll('img');
  let current = 0;
  
  setInterval(() => {
    images[current].style.display = 'none';
    current = (current + 1) % images.length;
    images[current].style.display = 'block';
  }, 3000); // Change every 3 seconds
});
