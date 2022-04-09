$(function () {
    // menu fixed part starts #################

    let menuoffset = $('.navbar').offset().top;
    // window scroll
    $(window).scroll(function(){
        let winscroll = $(window).scrollTop();
        if( winscroll > menuoffset ){
            $('.navbar').addClass('menufixed');
        }
        else{
            $('.navbar').removeClass('menufixed');
        }
        // backtop button
        if( winscroll > 400 ){
            $('.backtop').fadeIn(500);
        }else{
            $('.backtop').fadeOut(500);
        }
    });
    // backtop click
    $('.backtop').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        },300)
    });

    // menu fixed part ends #################
    // navbar part
    $('.menuicon').click(function () {
        $('#mynav ul').toggleClass('menuactive');
        $('.logo').toggleClass('logoactive');
    });
    // macaw tabs
    $('.macaw-tabs').macawTabs({
        autoVerticalOrientation: true,
        autoVerticalOrientationMaxWidth: '575px'
    });
    // about tabs
    new SiTabs(); {
        transition: 'slide'
    }
    $('.tab').click(function () {
        $('.tab').addClass('before_after');
    });

    // counter plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1200
    });

    // slick slider blog part
    $('.our_blog_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: '<span class="blog_left_arrow blog_arrow"><span class="blog_border"><i class="fas fa-chevron-left"></i></span></span>',
        prevArrow: '<span class="blog_right_arrow blog_arrow"><span class="blog_border"><i class="fas fa-chevron-right"></i></span></span>',
        responsive: [
            {
                breakpoint: 1199.99,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            },
        ]
    });

    // testimonial slick slider
    $('.testi_txt_slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        dots: false,
        fade: true,
        asNavFor: '.testi_img_slide',
        nextArrow: '<span class="testi_left_arrow testi_arrow"><span class="testi_border"><i class="fas fa-chevron-left"></i></span></span>',
        prevArrow: '<span class="testi_right_arrow testi_arrow"><span class="testi_border"><i class="fas fa-chevron-right"></i></span></span>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
        ]
    });
    $('.testi_img_slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.testi_txt_slide',
    });

    // testi bottom img part
    $('.testi_btm_slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: '0px',
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: '<span class="testi_left_arrow testi_arrow testi_btm_left"><span class="testi_border"><i class="fas fa-chevron-left"></i></span></span>',
        prevArrow: '<span class="testi_right_arrow testi_arrow testi_btm_right"><span class="testi_border"><i class="fas fa-chevron-right"></i></span></span>',
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            },
        ]
    });

    // About Us page part start here

    //about us slider starts
    $('.about_us_team_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: '<span class="testi_left_arrow testi_arrow testi_btm_left"><span class="testi_border"><i class="fas fa-chevron-left"></i></span></span>',
        prevArrow: '<span class="testi_right_arrow testi_arrow testi_btm_right"><span class="testi_border"><i class="fas fa-chevron-right"></i></span></span>',
        responsive: [
            {
                breakpoint: 1199.99,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                }
            },
        ]
    });
    // about us slider ends

    // About Us page part end here
});