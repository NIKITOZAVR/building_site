$(function () {
    $('.bannerblock__header').click(function() {

        $(this).siblings('.bannerblock__text').slideToggle(500)
            .parent().toggleClass('active')
            .siblings().removeClass('active')
            .children('.bannerblock__text').slideUp(500);
    });
});

$(function() {
    var jcarousel = $('.jcarousel');
    jcarousel
        .on('jcarousel:create jcarousel:reload', function() {
                carousel = $(this),
                width = carousel.innerWidth();
                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');

        })
        .jcarousel({
            wrap: 'circular'
        });
        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });
        $('.jcarousel-pagination')
            $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
        	perPage: 1,
            item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
            }
        });
 });
