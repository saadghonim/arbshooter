
$(document).ready(function(){

/*~~~~~~~~~~~~ hamburger ~~~~~~~~~~~ */

if ($(window).width() <= 767){
  $(".bars_").click(function(){
    $(".nav_bar").toggle("500");
    $(".moboverlay").fadeIn("500")
    $("body").addClass("over_")
  })
  $(".close_").click(function(){
    $(".nav_bar").toggle("500");
    $(".moboverlay").fadeOut("500")
    $("body").removeClass("over_")

  })
  $(".moboverlay").click(function(){
    $(".nav_bar").toggle("500");
    $(".moboverlay").fadeOut("500")
    $("body").removeClass("over_")
  })
  $(".li_hover").click(function(){
    $(this).children().next().slideToggle("500")
  })
  $(".btn_drop_lang").click(function(){
    $(".ul_drop_lang").slideToggle("500")
  })
}
/* ~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~ */
$('.slider .owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  rtl: true,
  autoplay: true,
  autoplaySpeed:1000,
  loop:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 1
      }
  }
})
/* ~~~~~~~~~~~~~~~~start most_viewed~~~~~~~~~~~~~~~ */
$('.most_viewed .owl-carousel').owlCarousel({
  loop: true,
  nav: true,
  rtl: true,
  // autoplay: true,
  margin:30,
  loop:true,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive: {
      0: {
          items: 2,
          margin:15
      },
      600: {
          items: 3
      },
      1000: {
          items: 4
      }
  }
})
/* ~~~~~~~~~~~~~~~~end most_viewed ~~~~~~~~~~~~~~~ */

/*  ~~~~~~~~~~~~~~~~~~~~~start Testimonials~~~~~~~~~~~~~~~~~~~~ */
$('.Testimonials .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  rtl: true,
  navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 2
      },
      1000: {
          items: 2
      }
  }
})
/*  ~~~~~~~~~~~~~~~~~~~~~end Testimonials~~~~~~~~~~~~~~~~~~~~~~ */




$(window).load(function() {
  $(".preloader-sa").fadeOut()
});

});

