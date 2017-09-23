/* INFO WRAPPER JAVASCRIPT */

$('.more').click(function(){
    $(this).animate({'opacity': '0'}, 1000);
    $('.less').animate({
        'opacity': '1', 
        'z-index': '1'
    }, 1000);
    $('.info').animate({'height': '15em'}, 1000);
});
$('.less').click(function(){
    $(this).animate({
        'opacity': '0',
        'z-index': '-1'
    }, 1000);
    $('.more').animate({'opacity': '1'}, 1000);
    $('.info').animate({'height': '120px'}, 1000);
});

/* END OF INFO WRAPPER JAVSCRIPT */

/*NAV BAR SPACER */
$(document).ready(function() {
  $(".container-info-wrapper").css("margin-top", $(".header").height());
});
/* END OF NAV BAR SPACER */