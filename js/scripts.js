/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (
          location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
      ) {
          var target = $(this.hash);
          target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
              $("html, body").animate(
                  {
                      scrollTop: target.offset().top,
                  },
                  1000,
                  "easeInOutExpo"
              );
              return false;
          }
      }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
      target: "#sideNav",
  });
})(jQuery); // End of use strict

// Dark mode toggle
(function () {
  var KEY = 'rc-theme';

  function getInitialTheme() {
    var saved = localStorage.getItem(KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    var icon = document.getElementById('theme-icon');
    var label = document.getElementById('theme-label');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    if (label) {
      var lang = document.documentElement.getAttribute('lang') || 'en';
      var isPt = lang.startsWith('pt');
      label.textContent = theme === 'dark'
        ? (isPt ? 'Modo claro' : 'Light mode')
        : (isPt ? 'Modo escuro' : 'Dark mode');
    }
  }

  applyTheme(getInitialTheme());

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem(KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
})();

// Image Lightbox
(function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.closeLightbox = function (e) {
    if (e && e.target !== lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(function () {
      lightboxImg.src = '';
    }, 250);
  };

  window.closeLightboxBtn = function (e) {
    e.stopPropagation();
    closeLightbox();
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  document.querySelectorAll('.project-screenshot').forEach(function (el) {
    el.addEventListener('click', function () {
      var img = el.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    });
  });
})();
