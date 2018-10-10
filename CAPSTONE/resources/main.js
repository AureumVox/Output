$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#navbar").css({
 
                "opacity": "0"
            })
        } else {
            $("#navbar").css({
 
                "opacity": "1",
 
            })
 
        }
    })
 })