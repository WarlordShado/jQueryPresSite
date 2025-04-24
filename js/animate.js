$(document).ready(function() {
    $(".moveButton").click(function(){
        var shrekPic = $("#moveDiv");

        shrekPic.animate({left:"250px"},"slow");
        shrekPic.animate({top:"300px",rotate:"360deg"},"slow");
        shrekPic.animate({left:"-250px"},"slow");
        shrekPic.animate({top:"0px",rotate:"-360deg"},"slow");
        shrekPic.animate({left:"0px"},"slow");
    });
});