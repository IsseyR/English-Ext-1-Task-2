$(document).ready(function(){
    $(".btn1").click(function(){
        fadeTextOut();
        setTimeout(fadeTextIn, 1000)
    });
  });

function fadeTextOut() {
    $("p").fadeOut();
}

function fadeTextIn() {
    $("p").fadeIn();
}