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

    $(".header__btn-menu").click(function() {
        $(".header__nav-bottom").toggleClass("hover");
    })

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

    if ($("div").is(".contacts__map")) {
        ymaps.ready(function () {
            var myMap = new ymaps.Map("map", {
                center: [41.310436, 69.187385],
                zoom: 17,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });
            myMap.geoObjects
                .add(new ymaps.Placemark([41.310436, 69.187385], {
                }, {
                    preset: 'islands#icon',
                    iconColor: '#853a8c'
                }))
        });
    }

    $(".faq__item").click(function () {
        $accordion_item = $(this);
        $(this).toggleClass("faq__item-hovered");
        $(".faq__item").not($(this)).removeClass("faq__item-hovered");
        if ($accordion_item.hasClass("faq__item-hovered")) {
            $child = $accordion_item.find(".faq__item-answer");
            $child.slideDown();
            $(".faq__item-answer").not($child).slideUp();
        } else {
            $(".faq__item-answer").slideUp();
        }
    });
});
//# sourceMappingURL=../maps/scripts/main.js.map
