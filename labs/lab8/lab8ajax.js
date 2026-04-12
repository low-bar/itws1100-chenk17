$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "lab8jsonfeed.json",
        dataType: "json",
        success: function (responseData, status) {
            var output = "<ul>";
            $.each(responseData.items, function (i, item) {
                output += '<li><a href="' + item.link + '" class="button">' + item.description + '</a></li>';
            });
            output += "</ul>";
            $('#labfeed').html(output);
        }, error: function (msg) {
            console.error("AJAX Error:", msg);
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
});
