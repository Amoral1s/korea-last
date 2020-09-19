$(document).ready(function () {
  //Всплывающее меню
  if (jQuery(window).width() < 992) {
    jQuery('.header-right__cats ul li.cat-parent').hover(function(){
      jQuery(this).children('ul').slideDown(200);
      jQuery(this).addClass('cat-parent-active');
    }, function(){
      jQuery(this).children('ul').slideUp(200);
      jQuery(this).removeClass('cat-parent-active');
    });

    jQuery('.open-menu__row .close').on('click', function() {
      jQuery('.open-menu').slideUp(300);
    });
    jQuery('.header-mob__row .burger').on('click', function() {
      jQuery('.open-menu').slideDown(300);
    });
  } else {
    jQuery('.header-right__cats ul li.cat-parent').hover(function(){
      jQuery(this).addClass('menu-active');
      console.log(jQuery(this));
      jQuery(this).children('ul').css('display', 'flex');
    }, function(){
      jQuery(this).children('ul').css('display', 'none');
      jQuery(this).removeClass('menu-active');
    });
  }
  
  //feed slider
  $('.feed-wrap__slider').slick({
    centerMode: false,
    slidesToShow: 4,
    dots: false,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3
        }
      },
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