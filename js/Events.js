$(document).ready(function() {
    $(document).on("keypress",function(event){
        var shrekPic = $("#Shrek")
        if (event.which === 13){
            shrekPic.animate({scale:"1.5"},"slow");
            shrekPic.animate({scale:"1"},"slow");
        } else {
            shrekPic.animate({rotate:"360deg"},"slow");
            shrekPic.animate({rotate:"-360deg"},"slow");
        }
    });
});