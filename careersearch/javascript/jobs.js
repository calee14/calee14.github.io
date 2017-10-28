/*NAV BAR SPACER */
$(document).ready(function() {
  $(".container-info-wrapper").css("margin-top", $(".header").height());
});
/* END OF NAV BAR SPACER */

/* READ MORE BUTTON */

// $(document).ready(function () {
// 	$('.text-expand').click(function () {
// 		/* FIND THE PARENT OF THE ELEMENT */
// 		var par = $(this).parents('.text-holder');
// 		/* FIND THE EXAPNSION TEXT AND TOGGLE IT */
// 		par.find(".text-content-expand").toggle();
// 		par.find(".text-content-original").toggle();
// 		par.find("text-holder").toggleClass("active-holder");
// 		/* FIND THE TEXT EXPAND BUTTON AND ADD A CLASS TO IT */
// 		par.find(".text-expand").toggleClass("active");
// 		return false;
// 	});
// });

/* END OF READ MORE BUTTON */

/* TEXT EXPAND 2.0 */
$(document).ready(function() {
	/* GET THE ELEMENT THAT WE'RE GOING TO EXPAND-MIN */
	var minimized_elements = $('p.text-expand-min');
	/* MAX LENGTH */
	var maxLength = 100;

	/* ADD HTML ELEMENTS WITHIN THE ELEMENT */
	minimized_elements.each(function() {
		/* GET TEXT */
		var t = $(this).text();
		/* IF THE LENGTH OF TEXT IS LESS THAN MAX LENGTH */
		if(t.length < maxLength) return;
		/* ADD HTML ELEMENTS */
		$(this).html(
			/* ADD MORE HTML ELEMENTS; ADD LESS HTML ELEMENTS */
			t.slice(0,maxLength) + '<span class="end-notice">... </span><a href="#" class="more">More</a>' +
			'<span class="tbd2" style="display:none;">' + t.slice(100,t.length) + 
			'<a href="#" class="less">Less</a></span'
		);
	});

	/* WHEN MORE HREF IS CLICKED */
	$('a.more', minimized_elements).click(function(event) {
		event.preventDefault();
		/* HIDES a TAG AND END-NOTICE ELEMENT */
		$(this).hide().prev().hide();
		/* UNHIDES THE OTHER TEXT OF PARAGRAPH*/
		$(this).next().show();
	});

	/* WHEN LESS HREF IS CLICKED */
	$('a.less', minimized_elements).click(function(event) {
		event.preventDefault();
		/* HIDES PART OF PARAGRAPH; SHOWS a TAG AND END-NOTICE ELEMENT */
		$(this).parent().hide().prev().show().prev().show();
	})
});
/* END OF TEXT EXPAND 2.0 */

var holder = document.getElementsByClassName("text-holder");

for (var i = 0; i < holder.length; i++) {
    holder[i].addEventListener('mouseenter', menus, false);
    holder[i].addEventListener('mouseleave', menus, false);
}

function menus() {
  var menu = this;
  menu.classList.toggle("category-shadow");
};