
//owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$(document).ready(function() {
    $(".dropdown").hover(
        function() {
            $(this).find('.dropdown-menu').addClass("show");
        },
        function() {
            $(this).find('.dropdown-menu').removeClass("show");
        }
    );
});
