$("body").mousemove(function (e) {
    $('#net').css({'top': e.clientY + 4, 'left': e.clientX + 4});
});
var off = 0;
$('.apple').on("click", function () {
    $(this).animate({top: '85%', left: 23 + off+ '%'}   , 700);
    off+=2;
});

function randomNumber(min, max) {
    var temp = Math.round(Math.random() * max) + min + '%';
    return temp;
}


var i = true;
$("#wateringcan").on("click", function () {
    if (i) {
        $(this).css({'transform': 'rotate(-20deg)'})
        i = false;
    } else {
        $(this).css({'transform': 'rotate(0deg)'})
        i = true;
    }

});
