$(document).ready(function() {
    $('.quickmenu02 > ul').slick({
      slidesToShow: 9,
      slidesToScroll: 1,
      centerMode: false,
      autoplay: false,
      dots: false,
      fade: false,
      control:true,
      arrows:true,
      swipe:true,
      appendDots:$(".buttons"),
      prevArrow:'<button type="button" class="slick-prev">이전</button>',
      nextArrow:'<button type="button" class="slick-next">다음</button>',
      adaptiveHeight: true,
      pauseOnHover:true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 7
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });
  
  $(document).ready(function() {
    $(".quickmenu02 .slick-slide a").on({
      mouseover:function(e) {
        var src = $(this).children(".quickmenu02 .slick-slide a img").attr("src");
        $(this).children(".quickmenu02 .slick-slide a img").attr("src", src.replace(".png", "_on.png"));
      },
      mouseout:function(e) {
        var src = $(this).children(".quickmenu02 .slick-slide a img").attr("src");
        $(this).children(".quickmenu02 .slick-slide a img").attr("src", src.replace("_on.png", ".png"));
      }
    });
  });
  
