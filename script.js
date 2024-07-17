document.addEventListener('DOMContentLoaded', function () {
  const faq = document.querySelector('.FAQ');
  const about = document.querySelector('.about');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(faq);
  observer.observe(about);
});