
var windowH = $(window).height()

var fullSellingHeight = $('.sellingItems').height() + 10
var shortSellingHeight = $('.sellingItem').height() + 10


$('.sellingItems').attr('style', 'height: ' + shortSellingHeight + 'px')

$('.sellingAll').click(function () {
    $('.sellingItems').attr('style', 'height: ' + fullSellingHeight + 'px')
})


var fullGuidesHeight = $('.guidesList').height()


if (windowH < 601) {
    var shortGuidesHeight = $('.guidesItem').height() * 2 + 40;
} else {
    var shortGuidesHeight = $('.guidesItem').height() * 2 + 80;
}

$('.guidesList').attr('style', 'height: ' + shortGuidesHeight + 'px')

$('.guidesAll').click(function () {
    $('.guidesList').attr('style', 'height: ' + fullGuidesHeight + 'px')
})

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 140,
    watchSlidesProgress: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        601: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".swiperNext",
        prevEl: ".swiperPrev",
    },
});

$(window).scroll(function () {
    var docscroll = $(document).scrollTop();
    if (docscroll > 200) {
        $('.navbar').addClass('navbarFixed')
    } else {
        $('.navbar').removeClass('navbarFixed')
    }
});

$('.hamburger').click(function () {
    $('.navbarMenu').addClass('navbarMenuShow')
})
$('.is-active').click(function () {
    $('.navbarMenu').removeClass('navbarMenuShow')
})

var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    }); //плавный скролл