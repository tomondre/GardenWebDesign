$("body").mousemove(function (e) {
    $('#net').css({'top': e.clientY + 4, 'left': e.clientX + 4});
});
$('.apple').click(function () {
    $(this).animate({top: "85%", left: "27%"}, 900)
});
$("#wateringcan").click(function () {
    $(this).rotate(40);
    $(this).animate({top: "85%", left: "27%"}, 900)
});