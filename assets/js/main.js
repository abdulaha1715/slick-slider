/* ==================================================
    Project Name  :  Slick Slider
    Version       :  1.0
    Author        :  Abdulaha Islam (https://github.com/abdulaha1715)
    Developer:    :  Abdulaha Islam
    Support       : abdulahaislam210917@gmail.com
 ==================================================== */

(function ($) {
    "use strict";

    $(document).ready(function () {

        // - Slider Activation
        $('.activete-sliders').slick({
            dots: true,
            arrows: true,
            infinite: true,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        });        
        
    });

})(jQuery);
