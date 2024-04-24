const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor tag behavior (jumping to top)

    const targetSection = document.getElementById(this.getAttribute('href').slice(1)); // Get section ID from href

    // Smooth scroll animation using requestAnimationFrame
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = targetSection.offsetTop;
    const distance = targetY - scrollTop;
    let start = null;

    const animation = () => {
      if (start === null) start = performance.now();
      const time = performance.now() - start;
      const ease = Math.easeInOutQuad(time, distance, 500); // Replace with desired easing function

      window.scrollTo(0, scrollTop + ease);

      if (ease < distance) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetY); // Ensure final position is reached
      }
    };

    requestAnimationFrame(animation);
  });
});

// Example easing function (easeInOutQuad)
Math.easeInOutQuad = function (t, b, c) {
  t /= c / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

// Optional: Add functionality for skills list toggle (similar to previous example)
