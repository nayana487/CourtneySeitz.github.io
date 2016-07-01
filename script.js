//header fades in on initial load of page
$(document).ready(function() {
  $('.fade').fadeIn(3000);
//  $(".body").hide();
//  $(".footer").hide();
});

//$(".test").click(function(){
//  $(".body").fadeIn(2200);
//  $(".footer")fadeIn(2200);
//});


//wishlist - have different sections fade in as clicked on the nav bar, fade in and out as appropriate
//wishlist - something with several images, gallery

//$(".test").click(function(){
//$(".body").fadeIn(2200);
//});

//function for sticking nav bar to the top as the window scrolls
$(function() {
    var nav = $('#navBarFloat');
    var navHome = nav.offset().top;
    var isFixed = false;
    var scrollWindow = $(window);
scrollWindow.scroll(function() {
    var scrollTop = scrollWindow.scrollTop();
    var shouldBeFixed = scrollTop > navHome;
        if (shouldBeFixed && !isFixed) {
          nav.css({
            position: 'fixed',
            top: 0,
            left: nav.offset().left,
            width: nav.width()
            });
            isFixed = true;
        }
        else if (!shouldBeFixed && isFixed)
        {
            nav.css({
            position: 'static'
            });
            isFixed = false;
        }
    });
});
