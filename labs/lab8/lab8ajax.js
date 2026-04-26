$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "lab8jsonfeed.json",
        dataType: "json",
        success: function (responseData, status) {
            // Iterate through pages 
            $.each(responseData.pages, function (i, page) {
                // For LabList
                if (page.page == "LabList") {
                    var output = "<ul>";
                    $.each(page.items, function (j, item) {
                        var lockIcon = item.secure ? ' 🔒' : '';
                        output += '<li><a href="' + item.link + '"';
                        if (item.secure) {
                            output += ' title="Password required"';
                        }
                        output += ' class="button">' + item.description + lockIcon + '</a></li>';
                    });
                    output += "</ul>";
                    // ensure the target element exist then setting css for the links
                    $("#" + page.page).html(output);
                    $("#LabList a").css({
                        'display':          'inline-block',
                        'padding':          '10px 20px',
                        'background-color': '#007bff',
                        'color':            'white',
                        'text-decoration':  'none',
                        'border-radius':    '5px',
                        'transition':       'transform 0.3s ease'
                    });
                    $("#LabList a").hover(
                        function () { $(this).css('transform', 'scale(1.1)'); },
                        function () { $(this).css('transform', 'scale(1)'); }
                    );
                }

                // For RSS
                if (page.page == "RSS") {
                    var rssXml = buildRSSFeed(page);
                    saveRSSToServer(rssXml);
                }
            });
        }, error: function (msg) {
            console.error("AJAX Error:", msg);
            alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });
});

// Helper function to build RSS XML string from page data
function buildRSSFeed(page) {

    function escapeXml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }

    function toRSSDate(dateStr) {
        return dateStr ? dateStr : new Date().toUTCString();
    }

    // Build each <item> from page.items
    var itemsXml = "";
    $.each(page.items, function (i, item) {
        itemsXml +=
            "<item>" +
            "<title>" + escapeXml(item.title) + "</title>" +
            "<link>" + escapeXml(item.link) + "</link>" +
            "<description>" + escapeXml(item.description) + "</description>" +
            "<pubDate>" + toRSSDate(item.pubDate) + "</pubDate>" +
            "<guid isPermaLink=\"true\">" + escapeXml(item.link) + "</guid>" +
            "</item>";
    });

    // Wrap in RSS envelope using channel-level fields from the page object
    var rss =
        '<?xml version="1.0" encoding="UTF-8"?>' +
        '<rss version="2.0">' +
        '<channel>' +
        '<title>' + escapeXml(page.title) + '</title>' +
        '<link>' + escapeXml(page.link) + '</link>' +
        '<description>' + escapeXml(page.description) + '</description>' +
        '<language>en-us</language>' +
        '<lastBuildDate>' + toRSSDate() + '</lastBuildDate>' +
        itemsXml +
        '</channel>' +
        '</rss>';

    return rss;
}
function saveRSSToServer(xmlString) {
    $.ajax({
        url: "save_rss.php",           // your PHP script (see below)
        method: "POST",
        contentType: "application/xml",
        data: xmlString,
        success: function () {
            console.log("RSS feed saved to server!");
        },
        error: function (xhr, status, error) {
            console.error("Failed to save RSS: " + error);
        }
    });
}