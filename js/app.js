$(document).foundation()

$("#meer").click(function() {
  $("#laad").toggle("fast");
});

$('#meer').click(function() {
  var s = $(this);
  s.html(s.text() == 'show less' ? 'show more' : 'show less');
});

$('.menu-toggle').on('click', function() {
  $('.menu').toggleClass('active');
});
