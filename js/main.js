$(function(){

  AOS.init();

$('.slider__inner, .news__slider-inner').slick({
  nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
});

$('select').styler(); 

$('.header__btn-menu').on('click', function(){
  $('.menu ul').slideToggle();
});




$(window).scroll(function () {
      
  if ($(this).scrollTop() != 0)
     $('#toTop').fadeIn("slow");
  else
     $('#toTop').fadeOut("slow");
});
$('#toTop').click(function () {
  $('body,html').animate({
     scrollTop: 0
  }, 800);
});
});

var btn = document.querySelectorAll('button');
for (var i = 0; i < btn.length; i++) {
btn[i].style.outline = 'none';
}

