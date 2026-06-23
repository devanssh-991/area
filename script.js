(function () {
  const navBar = document.getElementById('nav-bar');
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  openMenu?.addEventListener('click', () => {
    navBar?.classList.add('nav--open');
    mobileMenu?.classList.add('is-open');
    openMenu.classList.add('hidden');
    closeMenu?.classList.remove('hidden');
  });

  closeMenu?.addEventListener('click', () => {
    navBar?.classList.remove('nav--open');
    mobileMenu?.classList.remove('is-open');
    openMenu?.classList.remove('hidden');
    closeMenu.classList.add('hidden');
  });

  mobileMenu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navBar?.classList.remove('nav--open');
        mobileMenu.classList.remove('is-open');
        openMenu?.classList.remove('hidden');
        closeMenu?.classList.add('hidden');
      }
    });
  });

  const animated = document.querySelectorAll('.fade-in, .fade-in-fast, .fade-in-slow');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animated.forEach((el) => observer.observe(el));
})();
