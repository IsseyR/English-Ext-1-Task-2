$(document).ready(function(){
    $(".btn1").click(function(){
        fadeTextOut();
        fadeIn = setTimeout(fadeTextIn, 3000);
        clearTimeout(fadeIn);
    });
  });

function fadeTextOut() {
    $("p").fadeOut();
}

function fadeTextIn() {
    $("p").fadeIn();
}