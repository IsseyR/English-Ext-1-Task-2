$(document).ready(function(){
    $(".btn1").click(function(){
        fadeTextOut();
        fadeTextIn();
    });
  });

function fadeTextOut() {
    $("p").fadeOut();
}

function fadeTextIn() {
    $("p").fadeIn();
}