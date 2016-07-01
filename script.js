$(document).ready(function() {
$('.fade').fadeIn(3000);
//$(".body").hide();
//$(".footer").hide();
});

 //$(".test").click(function(){
//$(".body").fadeIn(2200);
//});

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
