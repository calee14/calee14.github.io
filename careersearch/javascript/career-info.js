/* NAV BAR SPACER */
$(document).ready(function() {
  $(".main").css("margin-top", $(".header").height());
});
/* END OF NAV BAR SPACER */

/* HIDE THE OTHER FEATURES */
$("#info-feature2, #info-feature3").hide();

/* TABS HOVER FUNCTION */
$(".tab")
.mouseenter( function () {$(this).css("background-color", "white")})
.mouseleave( function () {$(this).css("background-color", "yellow")});

/* WHEN TAB1 IS CLICKED */
$("#tab1").click(function() {
	find("#info-feature1");
})

/* WHEN TAB1 IS CLICKED */
$("#tab2").click(function() {
	find("#info-feature2");
})

/* WHEN TAB1 IS CLICKED */
$("#tab3").click(function() {
	find("#info-feature3");
})

/* SHOWS TAB CLICKED AND HIDES OTHER */
function find(elementname) {
	/* GET CONTAINTER INFO AND ITS CHILDREN AND LOOP THROUGH THEM */
	$(".container-career-info").children().each(function(index, child) {
		// console.log(child);
		/* SHOW AND HIDE */
		if($(child).is($(elementname))) {
			console.log("this: " + $(child))
			$(elementname).show();
		} else if($(child).is(".info")) {
			$(child).hide();
		}
	})
}