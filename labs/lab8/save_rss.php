<?php
    // Only accept POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        exit('Method not allowed');
    }

    // Read the raw XML from the request body
    $xmlData = file_get_contents('php://input');

    // Validate data was received
    if (empty($xmlData)) {
        http_response_code(400);
        exit('No data received');
    }

    // Validate it is actually XML
    libxml_use_internal_errors(true);
    $xml = simplexml_load_string($xmlData);
    if ($xml === false) {
        http_response_code(400);
        exit('Invalid XML received');
    }

    // Add XML stylesheet directive for CSS
    $stylesheet = "<?xml-stylesheet type=\"text/css\" href=\"../../../style/rss.css\"?>\n";
    // Ensure the XML declaration comes before the stylesheet directive
    $xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n" . $stylesheet . $xmlData;

    // Path to save — matches your existing rss-feed.xml filename
    $savePath = 'feeds/rss-feed.xml';

    // Create the feeds folder if it doesn't exist yet
    if (!file_exists('feeds')) {
        mkdir('feeds', 0755, true);
    }

    // Write the file
    if (file_put_contents($savePath, $xmlData) !== false) {
        http_response_code(200);
        echo 'RSS feed saved successfully';
    } else {
        http_response_code(500);
        echo 'Failed to write file — check folder permissions';
    }
?>