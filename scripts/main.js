$(document).ready(function(){
    /* условие, чтобы прижать к подвалу футер */
    function Footer() {
        $("main").removeAttr("style");
        if (($(".header").outerHeight() + $(".footer").outerHeight() + $("main").outerHeight()) < $(window).outerHeight()) {
            $("main").css("height", $(window).outerHeight() - ($(".header").outerHeight() + $(".footer").outerHeight()) + "px");
        } else {
            $("main").removeAttr("style");
        }
    }
    Footer();
    $(window).resize(function () {
        setTimeout(function () {
            Footer();
        }, 300)
    });

    var swiper = new Swiper('.main-slider', {
        loop: true,
        speed: 1800,
        slidesPerView: 'auto',
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
//# sourceMappingURL=../maps/scripts/main.js.map
