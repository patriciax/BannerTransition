$(window).scroll(function () {
  /* var banner = $("#banner").offset();*/
  var topofpage = $(window).scrollTop(),
    docheight = $(document).height(),
    winheight = $(window).height();

  var scrolled = (topofpage / (docheight - winheight)) * 100;
  var scrolt = (topofpage / (docheight - winheight)) * 25;
  var scrolt_left = (topofpage / (docheight - winheight)) * 16;
  var scrolt_right = (topofpage / (docheight - winheight)) * 24.5;
  var scrolt_right_creative = (topofpage / (docheight - winheight)) * 42;
  var scrolt_right_compose = (topofpage / (docheight - winheight)) * 15;
  var scrolt_right_together= (topofpage / (docheight - winheight)) * 12;
  var scrolt_left_cube = (topofpage / (docheight - winheight)) * 56.2;
  var spun = (topofpage / (docheight - winheight)) * 90;
  var opacity = (topofpage / (docheight - winheight)) * 1;
  var scrolt_right_circle = (topofpage / (docheight - winheight)) * 29.5;

  /* if ($(window).scrollTop() >= banner.top) {*/
  $(".text").css("left", scrolt + "%");
  $(".text2").css("left", scrolt_left + "%");
  $(".text-right").css("right", scrolt_right_creative + "%");
  $(".text3").css("right", scrolt_right_compose + "%");
  $(".text4").css("right", scrolt_right_together + "%");
  $(".center-cube").css("left", scrolt_left_cube + "%");
  $(".top_pink-content").css("right", scrolt_right + "%");
  $(".center-circle").css("right", scrolt_right_circle + "%");
  $(".arrow-img").css("-webkit-transform", "rotate(" + spun + "deg)");
  $(".right").css("width", scrolled + "%");
  $(".two").css("right", scrolted + "%");
  /* } 

else {
}*/
});
