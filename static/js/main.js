;(function() {
  "use strict"

  var isMobile = {
    Android: function() {
      return !!navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
      return !!navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
      return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
      return !!navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
      return !!navigator.userAgent.match(/IEMobile/i)
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      )
    },
  }

  var fullHeight = function() {
    if (!isMobile.any()) {
      $(".js-fullheight").css("height", $(window).height())
      $(window).resize(function() {
        $(".js-fullheight").css("height", $(window).height())
      })
    }
  }

  // Animations

  var contentWayPoint = function() {
    var i = 0
    $(".animate-box").waypoint(
      function(direction) {
        if (direction === "down" && !$(this.element).hasClass("animated")) {
          i++

          $(this.element).addClass("item-animate")
          setTimeout(function() {
            $("body .animate-box.item-animate").each(function(k) {
              var el = $(this)
              setTimeout(
                function() {
                  var effect = el.data("animate-effect")
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated")
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated")
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated")
                  } else {
                    el.addClass("fadeInUp animated")
                  }

                  el.removeClass("item-animate")
                },
                k * 200,
                "easeInOutExpo"
              )
            })
          }, 100)
        }
      },
      { offset: "85%" }
    )
  }

  var sliderMain = function() {
    $("#colorlib-hero .flexslider").flexslider({
      animation: "fade",
      slideshowSpeed: 5000,
      directionNav: true,
      start: function() {
        setTimeout(function() {
          $(".slider-text").removeClass("animated fadeInUp")
          $(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp")
        }, 500)
      },
      before: function() {
        setTimeout(function() {
          $(".slider-text").removeClass("animated fadeInUp")
          $(".flex-active-slide")
            .find(".slider-text")
            .addClass("animated fadeInUp")
        }, 500)
      },
    })
  }

  var stickyFunction = function() {
    var h = $(".image-content").outerHeight()
    if ($(window).width() <= 992) {
      $("#sticky_item").trigger("sticky_kit:detach")
    } else {
      $(".sticky-parent").removeClass("stick-detach")
      $("#sticky_item").trigger("sticky_kit:detach")
      $("#sticky_item").trigger("sticky_kit:unstick")
    }
    $(window).resize(function() {
      var h = $(".image-content").outerHeight()
      $(".sticky-parent").css("height", h)
      if ($(window).width() <= 992) {
        $("#sticky_item").trigger("sticky_kit:detach")
      } else {
        $(".sticky-parent").removeClass("stick-detach")
        $("#sticky_item").trigger("sticky_kit:detach")
        $("#sticky_item").trigger("sticky_kit:unstick")
        $("#sticky_item").stick_in_parent()
      }
    })
    $(".sticky-parent").css("height", h)
    $("#sticky_item").stick_in_parent()
  }

  // Document on load.
  $(function() {
    fullHeight()
    contentWayPoint()
    sliderMain()
    stickyFunction()
  })
})()
