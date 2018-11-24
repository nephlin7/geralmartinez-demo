"use strict";

$(document).ready(function () {
    new WOW().init();

    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    document.addEventListener('scroll', function () {
        let isTop = window.scrollY < 100;
        if (isTop) {
            $(".navbar").removeClass("bg-black");
        }else {
            $(".navbar").addClass("bg-black");
          
        }
    })
})

lightbox.option({'resizeDuration': 200, 'wrapAround': true})
