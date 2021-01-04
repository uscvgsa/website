import $ from "jquery";

// Changes navbar appearance based on scroll position and screen width.
function checkNavbarActive() {
  const LG_BREAKPOINT = 992;
  if ($(window).scrollTop() > 10 || $(window).width() < LG_BREAKPOINT) {
    // If scrolling down or on a small screen, create primary color background
    // and light theme navbar.
    $(".navbar").addClass("bg-primary");
    $(".navbar").addClass("navbar-light");
    $(".navbar").removeClass("navbar-dark");
  } else {
    // Otherwise, remove background and use dark theme navbar.
    $(".navbar").removeClass("bg-primary");
    $(".navbar").addClass("navbar-dark");
    $(".navbar").removeClass("navbar-light");
  }
}

$(function () {
  checkNavbarActive();
  $(window).on("scroll", checkNavbarActive);
  $(window).on("resize", checkNavbarActive);
});
