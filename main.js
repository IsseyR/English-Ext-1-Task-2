$(document).ready(function(){
    $(".btn1").click(function(){
        fadeTextOut();
        setTimeout(fadeTextIn, 500)
    });
  });

function fadeTextOut() {
    $("p").fadeOut();
}

function fadeTextIn() {
    $("p").fadeIn();
}