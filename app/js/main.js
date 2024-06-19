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
                responsive: [{
                    breakpoint: 575,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                }]
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
            if (window.innerWidth > 768) {
                $(this).closest('.primary-nav').find('.menu-item').removeClass('active');
                $(this).parent().addClass('active');
            }
            if (window.innerWidth < 768) {
                $('.main-menu-mb').removeClass('active');
            }
            var targetId = $(this).attr('href');
            var targetElement = $('#' + targetId);
            var targetDistance = 80;
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
        $(window).on('load', function () {
            if (headerOffset > 0) {
                header.addClass('fixed-header');
                $('.scroll-to-top').addClass('fixed');
            }
        })
        $(window).scroll(function () {
            if ($(window).scrollTop() > 0) {
                header.addClass('fixed-header');
                $('.scroll-to-top').addClass('fixed');
            } else if ($(window).scrollTop() == 0) {
                $('.menu-item').removeClass('active');
                header.removeClass('fixed-header');
                $('.scroll-to-top').removeClass('fixed');
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
var scrollToTop = {
    init: function () {
        $('.scroll-to-top').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 600);
            return false;
        })
    }
}
var buttonCta = {
    init: function () {
        $('body').on('click', '.cta-item-contact', function () {
            $(this).toggleClass('closes');
            $('.overlay').toggleClass('show');
            $(this).next().toggleClass('show');
        })
        $('body').on('click', '.overlay', function () {
            $(this).removeClass('show');
            $('.cta-item-contact').removeClass('closes');
            $('.cta-container .list-cta').removeClass('show');
        })
    }
}
var toggleMenu = {
    init: function () {
        $('body').on('click', '.toggle-menu', function () {
            $(this).next().toggleClass('active');
            return false;
        })
    }
}
var formRegister = {
    init: function () {
        var formGoogle = $('form.form-ggs');
        if (formGoogle.length > 0) {
            formGoogle.on('submit', function () {
                var container = $(this);
                formRegister.sendForm(container);
                return false;
            })
        }
    },
    sendForm: function (container) {
        var fullname = $(container).find('input[name="fullname"]').val();
        var numberphone = $(container).find('input[name="numberphone"]').val();
        var email = $(container).find('input[name="email"]').val();
        var content = $(container).find('textarea[name="content"]').val();
        var course = $(container).find('#course').val();
        if (course == "") {
            course = 'Tư vấn';
        }
        if (fullname != "" && numberphone != "") {
            $.ajax({
                url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfb6x86KH3NfM35Fwew_WQi9EOCKX9Um9U7FunbgcP1ta-q2A/formResponse",
                type: "POST",
                dataType: "xml",
                data: {
                    "entry.1348345172": fullname,
                    "entry.519821471": numberphone,
                    "entry.1168685713": email,
                    "entry.1727228810": course,
                    "entry.1624929131": content,
                },
                statusCode: {
                    0: function () {
                        $('#modalRegister').modal('hide');
                        setTimeout(function () {
                            $('#modal-alert-success').modal('show');
                        }, 1000);
                        setTimeout(function () {
                            $('#modal-alert-success').modal('hide');
                        }, 3000);
                        $(container).closest('form').find("input[type=text],input[type=email], textarea").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                    },
                    200: function () {
                        $('#modalRegister').modal('hide');
                        setTimeout(function () {
                            $('#modal-alert-success').modal('show');
                        }, 1000);
                        setTimeout(function () {
                            $('#modal-alert-success').modal('hide');
                        }, 3000);
                        $(container).closest('form').find("input[type=text],input[type=email], textarea").val("");
                        $(container).find('button').attr('disabled', 'disabled');
                    },
                }
            });
        } else {
            alert("Kiểm tra lại các trường thông tin vừa nhập!");
        }
    }
}
jQuery(document).ready(function () {
    faq.init();
    slider.init();
    actionClick.init();
    scrollFixed.init();
    scrollToTop.init();
    buttonCta.init();
    toggleMenu.init();
    formRegister.init();
});