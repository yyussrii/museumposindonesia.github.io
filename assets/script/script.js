$(".dropdown-toggle").click(function () {
  $(this).next(".dropdown-menu").slideToggle(400);
});

$(".dropdown-toggle").focusout(function () {
  $(this).next(".dropdown-menu").slideUp(400);
});
