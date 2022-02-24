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
    $("img.user-icon").click(function(){
        $(".loader").show();
    });

    $(".loader button").click(function(){
        $(".loader").hide();
    });

    $(".contract-button").click(function(){
        $(".loader-2").show();
    });

    $(".project-link").click(function(){
        $(".loader-3").show();
    });

    $(".loader-3 button").click(function(){
        $(".loader-3").hide();
    });

    $(".upload").click(function(){
        $(".loader-4").show();
    });

    $(".loader-4 .previous").click(function(){
        $(".loader-4").hide();
    });

    $(".to-contract").click(function(){
        $(".loader-5").show();
    });

    $(".signature").click(function(){
        $(".loader-5").show();
    });

    $(".designer-signature").click(function(){
        $(".loader-5").show();
    });

    $(".loader-5 button").click(function(){
        $(".loader-5").hide();
    });

    $("#reminder").click(function(){
        $(".loader-5").show();
    });

    $(".loader-5 .close").click(function(){
        $(".loader-5").hide();
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


  