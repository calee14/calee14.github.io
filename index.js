$("#features2, #features3, #features4").hide();

$(".thumbnails")
.mouseenter( function () {$(this).css("opacity", "0.5")})
.mouseleave( function () {$(this).css("opacity", "1.0")});

$("#thumbnails1").click(function() {
    $("#features2, #features3, #features4").hide();
    $("#features1").fadeIn(1000);
    
});

$("#thumbnails2").click(function() {
    $("#features1, #features3, #features4").hide();
    $("#features2").fadeIn(1000);
    
});

$("#thumbnails3").click(function() {
    $("#features1, #features2, #features4").hide();
    $("#features3").fadeIn(1000);
    
});

$("#thumbnails4").click(function() {
    $("#features1, #features3, #features2").hide();
    $("#features4").fadeIn(1000);
    
});