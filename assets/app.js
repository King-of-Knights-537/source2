$(document).ready(function() {

    //To Show Hidden Color of Navbar
    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
 
    //Carousel 
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
    });
    
    //Scroll-Animation
    const r = rolly({
        view: document.querySelector('.app'),
        native: true,
        // other options
    });
    r.init();

    AOS.init({
        duration: 1500 // global duration
    });

});


  