/*NAV BAR SPACER */
$(document).ready(function() {
  $(".mainNav-bar").css("margin-top", $(".header").height());
});
/* END OF NAV BAR SPACER */

var holder = document.getElementsByClassName("category-holder");

for (var i = 0; i < holder.length; i++) {
    holder[i].addEventListener('mouseenter', menus, false);
    holder[i].addEventListener('mouseleave', menus, false);
}

function menus() {
  var menu = this;
  menu.classList.toggle("category-shadow");
};