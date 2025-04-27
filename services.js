// services.js

document.querySelectorAll('.slider').forEach(slider => {
  const elements = slider.querySelectorAll('img, video');
  let current = 0;

  setInterval(() => {
    elements.forEach(el => el.style.display = 'none');

    current = (current + 1) % elements.length;
    elements[current].style.display = 'block';

    // Pause videos when hidden
    elements.forEach(el => {
      if (el.tagName.toLowerCase() === 'video') {
        el.pause();
        el.currentTime = 0;
      }
    });

    if (elements[current].tagName.toLowerCase() === 'video') {
      elements[current].play();
    }

  }, 4000); // Switch every 4 seconds
});
