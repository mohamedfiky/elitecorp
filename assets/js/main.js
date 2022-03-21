$(function () {
    'use strict';
    // Adjust Slider Height
    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navH    = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));
  
    /*****************************  Shuffle  ***************************************/
  
    $(".work ul li").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active")
        if ($(this).data("class") == "all"){
            $(".work .shuffle img").css("opacity", 1);
        }else{
            $(".work .shuffle img").css("opacity", 0.1);
            $($(this).data("class")).css("opacity", 1);


        }
    });
  });
  