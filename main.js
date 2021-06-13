$(document).ready(function(){
    $(".btn1").click(function(){
        fadeTextOut();
        setTimeout(fadeTextIn, 300);
    });
  });

function fadeTextOut() {
    $("p").fadeOut();
}

function fadeTextIn() {
    $("p").fadeIn();
    alert('rest');
}