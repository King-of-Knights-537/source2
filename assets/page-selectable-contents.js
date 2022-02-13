//Select-Content-Bar & Contents
$(document).ready(function(){

    //Header Select-Content-Bar & Contents
    $("header .btn-1").click(function(e) {
        e.preventDefault();
        $("main .section-1").addClass("active");
        $("main .section-2").removeClass("active");
        $("main .section-3").removeClass("active");
        $("main .section-4").removeClass("active");
        $("header .btn-1").addClass("active"); 
        $("header .btn-2").removeClass("active");
        $("header .btn-3").removeClass("active");
        $("header .btn-4").removeClass("active");
    });

    $("header .btn-2").click(function(e) {
        e.preventDefault();
        $("main .section-1").removeClass("active");
        $("main .section-2").addClass("active");
        $("main .section-3").removeClass("active");
        $("main .section-4").removeClass("active");
        $("header .btn-1").removeClass("active");
        $("header .btn-2").addClass("active"); 
        $("header .btn-3").removeClass("active");
        $("header .btn-4").removeClass("active");
    });
    
    $("header .btn-3").click(function(e) {
        e.preventDefault();
        $("main .section-1").removeClass("active");
        $("main .section-2").removeClass("active");
        $("main .section-3").addClass("active");
        $("main .section-4").removeClass("active");
        $("header .btn-1").removeClass("active");
        $("header .btn-2").removeClass("active");
        $("header .btn-3").addClass("active");
        $("header .btn-4").removeClass("active");
    });

    $("header .btn-4").click(function(e) {
        e.preventDefault();
        $("main .section-1").removeClass("active");
        $("main .section-2").removeClass("active");
        $("main .section-3").removeClass("active");
        $("main .section-4").addClass("active");
        $("header .btn-1").removeClass("active");
        $("header .btn-2").removeClass("active");
        $("header .btn-3").removeClass("active");
        $("header .btn-4").addClass("active");
    });
    
    //Main Select-Content-Bar & Contents
    $("section h2.btn-1").click(function(e) {
        e.preventDefault();
        $("section .content-1").addClass("active");
        $("section .content-2").removeClass("active");
        $("section .content-3").removeClass("active");
        $("section .content-4").removeClass("active");
        $("section h2.btn-1").addClass("active"); 
        $("section h2.btn-2").removeClass("active");
        $("section h2.btn-3").removeClass("active");
        $("section h2.btn-4").removeClass("active");
    });

    $("section h2.btn-2").click(function(e) {
        e.preventDefault();
        $("section .content-1").removeClass("active");
        $("section .content-2").addClass("active");
        $("section .content-3").removeClass("active");
        $("section .content-4").removeClass("active");
        $("section h2.btn-1").removeClass("active");
        $("section h2.btn-2").addClass("active"); 
        $("section h2.btn-3").removeClass("active");
        $("section h2.btn-4").removeClass("active");
    });
    
    $("section h2.btn-3").click(function(e) {
        e.preventDefault();
        $("section .content-1").removeClass("active");
        $("section .content-2").removeClass("active");
        $("section .content-3").addClass("active");
        $("section .content-4").removeClass("active");
        $("section h2.btn-1").removeClass("active");
        $("section h2.btn-2").removeClass("active");
        $("section h2.btn-3").addClass("active");
        $("section h2.btn-4").removeClass("active");
    });

    $("section h2.btn-4").click(function(e) {
        e.preventDefault();
        $("section .content-1").removeClass("active");
        $("section .content-2").removeClass("active");
        $("section .content-3").removeClass("active");
        $("section .content-4").addClass("active");
        $("section h2.btn-1").removeClass("active");
        $("section h2.btn-2").removeClass("active");
        $("section h2.btn-3").removeClass("active");
        $("section h2.btn-4").addClass("active");
    });

});