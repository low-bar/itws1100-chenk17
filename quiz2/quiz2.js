// Quiz 2
// Put your javascript here in a document.ready function

alert("The DOM is now loading.");

$(document).ready(function () {

    alert("The DOM is now loaded.");
    $("title").html('ITWS 1100 - Quiz 2');

    $('.go').click(function () {
        if ($('title').html() === 'ITWS 1100 - Quiz 2') {
            $('title').html('Chen - Quiz 2');
        }
        else {
            $('title').html('ITWS 1100 - Quiz 2');
        }
    });

    $('#lastname').hover(function () {
        $(this).addClass('makeItPurple');
    });
    $('#lastname').mouseleave(function () {
        $(this).removeClass('makeItPurple');

    });

});

