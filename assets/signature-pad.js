document.addEventListener("DOMContentLoaded", function() {
    
    var canvas = document.querySelector("#signature-pad");
    var signaturePad = new SignaturePad(canvas, {
        minWidth: 2,
        maxWidth: 4,
    });

    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    var clearButton = document.querySelector("#clear");
    clearButton.addEventListener("click", function() {
        signaturePad.clear();
    });
    
});