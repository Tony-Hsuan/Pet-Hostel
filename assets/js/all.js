"use strict";

$(document).ready(function () {
  $('.menu-toggler').click(function (e) {
    e.preventDefault();
    $('.navbar-menu').toggleClass('nav-mobile-show');
  }); //index.html

  $(".member-gallery-small img").click(function () {
    $(".member-gallery-big img").prop("src", $(this).prop("src"));
  });
});
"use strict";

var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: 'false',
  speed: 300,
  calculateHeight: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination'
  },
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },
  //break-points
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    767: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
