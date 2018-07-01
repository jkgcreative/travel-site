$(function() {
    var header = $(".navigation");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 500) {
            header.addClass("navigation-scrolled");
        } else {
            header.removeClass("navigation-scrolled");
        }
    });
    
});
