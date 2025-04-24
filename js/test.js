$(document).ready(function() {
    $("#button1").click(() => {
       $("#text1").css("color","red").slideDown(2000).slideUp(2000);
    });
});