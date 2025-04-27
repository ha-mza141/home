// services.js

document.querySelectorAll('.slider').forEach(slider => {
  const elements = slider.querySelectorAll('img, iframe');
  let current = 0;

  setInterval(() => {
    elements.forEach(el => el.style.display = 'none');
    current = (current + 1) % elements.length;
    elements[current].style.display = 'block';
  }, 4000); // Change every 4 seconds
});
