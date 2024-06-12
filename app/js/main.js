var slider = {
    init: function () {
        slider.slideExperts();
    },
    slideExperts: function () {
        if ($('.list-image-experts .item').length > 1 && $('.list-content-experts .item').length > 1) {
            $('.list-image-experts').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                arrows: false,
                asNavFor: '.list-content-experts',
            });
            $('.list-content-experts').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.list-image-experts',
                dots: false,
                arrows: true,
                fade: true,
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