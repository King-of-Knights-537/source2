$(document).ready(function() {

    //Navbar
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    $(".open").click(function(){
        $(".open").hide();
    });

    $(".close").click(function(){
        $(".open").show();
    });

    //Alert loader
    $(".loader button").click(function(){
        $(".loader").hide();
    });

    $(".contract-button").click(function(){
        $(".loader-2").show();
    });
 
    //Carousel 
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
    });
    
    //Scroll-Animation
    AOS.init({
        duration: 1500 // global duration
    });

});


  