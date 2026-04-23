$(document).ready(function () {
    $('body').css('background-color', 'grey');

    $('h1').css({
        'text-align': 'center',
        'color': 'white'
    });

    $('#wallForm').css({
        'display': 'block',
        'width': 'fit-content',
        'margin': '0 auto'
    });

    $('#wallForm fieldset').css('background-color', 'green');

    $('#wallForm input[type="text"]').css('background-color', 'yellow');

    $('h3:contains("Add a Comment")').css('text-align', 'center');

    $('h3:contains("Wall")').css({
        'text-align': 'center',
        'background-color': 'white'
    });

    $('#wallBody').css({
        'background-color': 'white',
        'width': 'fit-content',
        'margin': '0 auto'
    });
});
