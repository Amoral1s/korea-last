$(document).ready(function () {
  //Всплывающее меню
  jQuery('.header-right__cats ul li.cat-parent').hover(function(){
    jQuery(this).addClass('menu-active');
    console.log(jQuery(this));
    jQuery(this).children('ul').css('display', 'flex');
  }, function(){
    jQuery(this).children('ul').css('display', 'none');
    jQuery(this).removeClass('menu-active');
  });
  //feed slider
  $('.feed-wrap__slider').slick({
    centerMode: false,
    slidesToShow: 4,
    dots: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 579,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

});