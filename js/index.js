$(function () {
  $(window).on("scroll", function () {
    let nav = $(this).scrollTop();
    if (nav >= 200) {
      $("header").addClass("bg");
    } else {
      $("header").removeClass("bg");
    }
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        $(".txtbox").removeClass("active");
      },
      slideChangeTransitionEnd: function () {
        $(".swiper-slide-active .txtbox").addClass("active");
      },
      init: function () {
        $(".swiper-slide-active .txtbox").addClass("active");
      },
    },
  });

  function win() {
    let w = $(window).width();
    if (w >= 801) {
      let con01 = $(".con01").offset().top;
      let sc01 = false;
      function resetCon01() {
        sc01 = false;
        $(".con01 h2").removeClass("up");
        $(".con01 .wrap").removeClass("up");
      }

      $(window).on("scroll", function () {
        let pos = $(this).scrollTop();
        if (pos < con01 - 600) {
          resetCon01();
        }
        if (pos >= con01 - 400 && !sc01) {
          $(".con01 h2").addClass("up");
          sc01 = true;
        }

        if (pos >= con01 - 200 && sc01) {
          $(".con01 .wrap").addClass("up");
        }
      });
    } else if (w <= 800) {
      $(".navibar").on("click", function () {
        $(".txtnav").slideToggle();
      });
      $(".menubar").on("click", function () {
        $("header > ul").slideToggle();
      });
      $(".con01 h2").addClass("up");
      $(".con01 .wrap").addClass("up");
    } else {
    }
  }
  win();
  $(window).resize(win);
  var swiper = new Swiper(".mySwiper2", {
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // $(window).on("scroll", function () {
  //   pos = $(this).scrollTop();

  //   if (pos >= con01 - 400 && !sc01) {
  //     $(".con01 h2").removeClass("up");
  //     $(".con01 h2").addClass("up");
  //   }
  //   if (pos >= con01 - 200 && !sc01) {
  //     $(".con01 .wrap").removeClass("up");
  //     $(".con01 .wrap").addClass("up");
  //   }
  // });

  let banner = $(".banner").offset().top;
  let bannerHeight = $(".banner").height();
  let sc = false;
  $(window).on("scroll", function () {
    pos = $(this).scrollTop();

    if (pos >= banner - 500 && !sc) {
      sc = true;
      let num1 = 0;
      let num2 = 0;
      let num3 = 0;

      let end1 = 468;
      let end2 = 12;
      let end3 = 43;

      let count = 0;

      let timer = setInterval(function () {
        count++;
        num2++;
        num3 += 1;
        num1 += 2;

        $(".bncontent li:nth-child(1) span").text(num1);
        $(".bncontent li:nth-child(2) span").text(num2);
        $(".bncontent li:nth-child(3) span").text(num3);

        if (count >= 12) {
          $(".bncontent li:nth-child(1) span").text(end1);
          $(".bncontent li:nth-child(2) span").text(end2);
          $(".bncontent li:nth-child(3) span").text(end3);
          clearInterval(timer);
        }
      }, 50);
    }
  });

  // ===========
  let con02 = $(".con02").offset().top;
  let sc02 = false;
  function resetCon02() {
    sc02 = false;
    $(".con02 h2").removeClass("float");
    $(".con02 p").removeClass("float");
  }

  $(window).on("scroll", function () {
    let pos = $(this).scrollTop();
    if (pos < con02 - 600) {
      resetCon02();
    }
    if (pos >= con02 - 400 && !sc02) {
      $(".con02 h2").addClass("float");
      sc02 = true;
    }

    if (pos >= con02 - 300 && sc02) {
      $(".con02 p").addClass("float");
    }
  });
  // ===========
  $(document).ready(function () {
    const $items = $(".con03 ul li");

    function checkScroll() {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      $items.each(function (index) {
        const $item = $(this);
        const offsetTop = $item.offset().top;

        const triggerPoint = scrollTop + windowHeight;

        if (triggerPoint > offsetTop) {
          setTimeout(function () {
            $item.addClass("raise");
          }, index * 120);
        } else {
          $item.removeClass("raise");
        }
      });
    }

    $(window).on("scroll", checkScroll);
    checkScroll();
  });
  // ===========

  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  $(".con03 > ul li").on("click", function () {
    isOn = $(this).hasClass("on");
    if (isOn == true) {
      $(".con03 > ul li .under").stop().slideUp();
      $(".con03 > ul li").removeClass("on");
    } else {
      $(".con03 > ul li .under").stop().slideUp();
      $(this).find(".under").stop().slideDown();
      $(".con03 > ul li").removeClass("on");
      $(this).addClass("on");
    }
  });
});
