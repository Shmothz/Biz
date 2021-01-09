$(document).ready(function() {
    $('.js-promo-slider').slick({
        dots: true,
        appendDots: '.js-promo-slider__dots',
        appendArrows: '.js-promo-slider__arrows',
        fade: true,
        cssEase: 'linear'
    });
    $('.js-companions-slider').slick({
        dots: true,
        appendDots: '.js-companions-slider__dots',
        appendArrows: '.js-companions-slider__arrows',
        cssEase: 'linear'
    });
    $('.js-reciews-slider').slick({
        dots: true,
        appendDots: '.js-reciews-slider__dots',
        appendArrows: '.js-reciews-slider__arrows',
        cssEase: 'linear'
    });

    $('.main__btn').click(function() {
        $(this).toggleClass('js-main__btn');
    });
    $('.js-category__wrapp-tabs').each(function() {
        $('.js-category__tab').hover(function() {
            $(this).toggleClass('js-tab__content');
        });
    });
    $('.abous-us__right-column').each(function() {
        $('.right-column__tab').hover(function() {
            $(this).toggleClass('js-right-column__tab');
        });
    });

});