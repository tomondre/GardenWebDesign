var offset = 0;
$(".waterdrop").each(function () {
    $(this).css({'left': 39 + offset + '%'});
    offset++;
    $(this).hide();
});


$("body").mousemove(function (e) {
    $('#net').css({'top': e.clientY + 4, 'left': e.clientX + 4});
});
var off = 0;
$('.apple').on("click", function () {
    $(this).animate({top: '85%', left: 23 + off + '%'}, 700);
    off += 2;
});

function randomNumber(min, max) {
    var temp = Math.round(Math.random() * max) + min;
    return temp;
}

function drop(item) {
    $(item).show().animate({top: $(window).height() - 10}, randomNumber(2500, 3500), "linear", function () {
        $(item).css({'top': '70%'});
        drop(item);
    });

}

var i = true;
$("#wateringcan").on("click", function () {
    if (i) {
        i = false;
        $(this).css({'transform': 'rotate(-20deg)'})

        $(".waterdrop").each(function () {
            drop(this);
            $(".waterdrop").css({'top': '70%'});
        });
    }
    else {
        i = true;
        $(this).css({'transform': 'rotate(0deg)'})
        $(".waterdrop").queue(true);
    }
});


function movementRandom() {
    var windowWidth = $(window).width();
    var windowHight = $(window).height();


    var butterflyWidth = $("#butterfly").width();
    var butterflyHight = $("#butterfly").height();

    var xMovement = windowWidth - butterflyWidth;
    var yMovement = windowHight - butterflyHight;

    var moveX = Math.floor(Math.random() * xMovement);
    var moveY = Math.floor(Math.random() * yMovement);

    return [moveX, moveY];
}

function butterflyMovement(speed) {
    var butterfly = $("#butterfly");
    var move = movementRandom();
    butterfly.animate({
        left: move[0],
        top: move[1]
    }, speed, function () {
        butterflyMovement(3000)
    });
}

function butterflyEscape() {
    var butterfly = $("#butterfly");
    butterfly.stop(true);
    butterflyMovement(400);
    butterflyMovement(3000);
}

butterflyMovement(3000);

$("#butterfly").on("mouseover", function () {
    butterflyEscape();
})
$(window).on("click", function (event) {
    var xCoord = event.pageX;
    var yCoord = event.pageY;

    $("#x").append(xCoord);
    $("#y").append(yCoord);
})
