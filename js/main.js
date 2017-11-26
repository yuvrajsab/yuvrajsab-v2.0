$(function () {
  if ($(window).width() < 514) {
    $('.onmob').removeClass('container');
  }
  $("#s-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  });
});

$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$(function() {
  $('#s-top').hide();
  $(window).scroll(function(){
        if ($(window).scrollTop() > 350){
            $('#s-top').show(200);
        }
        else {
          $('#s-top').hide();
        }
    });
});
