var slider = {
    init: function () {
        slider.slideExperts();
        slider.slideCourse();
    },
    slideExperts: function () {
        if ($('.list-image-experts .item').length > 1 && $('.list-content-experts .item').length > 1) {
            $('.list-image-experts').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                speed: 500,
                asNavFor: '.list-content-experts',
            });
            $('.list-content-experts').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.list-image-experts',
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 3000,
                fade: true,
                speed: 500,
            });
        }
    },
    slideCourse: function () {
        var listSlide = $('.list-course');
        var numberSlide = $('.list-course .course-item').length;
        if (listSlide.length > 0 && numberSlide >= 1) {
            listSlide.slick({
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                arrows: false,
                cssEase: 'linear',
                autoplay: true,
                autoplaySpeed: 3000,
            });
        }
    }
}
var actionClick = {
    init: function () {
        $('body').on('click', '.scrollTo', function () {
            $(this).closest('.primary-nav').find('.menu-item').removeClass('active');
            $(this).parent().addClass('active');
            var targetId = $(this).attr('href');
            var targetElement = $('#' + targetId);
            var targetDistance = 110;
            if (targetElement.length > 0) {
                var getOffset = targetElement.offset().top;
                $('html,body').animate({
                    scrollTop: getOffset - targetDistance
                }, 500);
            }
            return false;
        })
    }
}
var scrollFixed = {
    init: function () {
        var header = $('#header');
        var headerOffset = header.offset().top;

        $(window).scroll(function () {
            if ($(window).scrollTop() > headerOffset) {
                header.addClass('fixed-header');
            } else {
                $('.menu-item').removeClass('active');
                header.removeClass('fixed-header');
            }
        });
    }
}
var faq = {
    init: function () {
        $('body').on('click', '.list-faq .item-faq:not(.active) .extend', function () {
            $(this).parent().siblings().removeClass('active');
            $(this).parent().addClass('active');
            $(this).next().slideDown(300);
            $(this).parent().siblings().find('.faq-content').slideUp(300);
        });
        $('body').on('click', '.list-faq .item-faq.active .extend', function () {
            $(this).next().slideUp(300);
            $(this).parent().removeClass('active');
        })
    }
}
jQuery(document).ready(function () {
    faq.init();
    slider.init();
    actionClick.init();
    scrollFixed.init();
});