$(document).ready(function () {
  //Всплывающее меню
  jQuery('.header-right__cats ul li.cat-parent').hover(function(){
    jQuery(this).children('ul').css('display', 'flex');
  }, function(){
    jQuery(this).children('ul').css('display', 'none');
  });
});