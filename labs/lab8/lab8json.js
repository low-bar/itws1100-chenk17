$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "lab8jsonfeed.js",
        dataType: "json",
        success: function (responseData, status) {
            var output = "<ul>";
            $.each(responseData.items, function (i, item) {
                output += '<li><a href="' + item.link + '" class="button">' + item.description + '</a></li>';
            });
            output += "</ul>";
            $('#lablist').html(output);
        }, error: function (msg) {
            // there was a problem
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

});