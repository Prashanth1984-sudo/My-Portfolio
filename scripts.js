// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // Scroll reveal animations
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
