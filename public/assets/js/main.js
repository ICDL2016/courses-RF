$(window).load(function () {
  var $catalog = $('.courses-main__wrapper').not('.courses-main_lc').masonry();
  // поведение элементов каталога

  $catalog.masonry({
    itemSelector: '.course-item',
    isFitWidth: true
  });
})


$(function () {

  //попапы
  $('.fancybox').fancybox();
  // console.log('qqq')
  // $('.js-custom-radio').on('change', function () {
  //   $(this).closest('.learn-types__item').addClass('active').siblings().removeClass('active')
  // })

  $('input').click(function () {
    $('input:not(:checked)').parent().removeClass("price-study__plan--selected");
    $('input:checked').parent().addClass("price-study__plan--selected");
  });


});