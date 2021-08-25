$(function () {
  $('.featured__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/arrow-left.svg" alt="Кнопка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/arrow-right.svg" alt="Кнопка вправо"></button>',
  });

  $(function () {
    $('.header__menu-btn').on('click', function () {
      $('.header__menu').toggleClass('header__menu--active');
    });
  });

  var containerEl = document.querySelector('.portfolio__list');
  var mixer = mixitup(containerEl);
});