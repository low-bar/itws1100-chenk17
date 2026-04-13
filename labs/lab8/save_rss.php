<?php
    // Only accept POST requests
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        exit('Method not allowed');
    }

    // Read the raw XML from the request body
    $xmlData = trim(file_get_contents('php://input'));

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

    // 1. Define the components
    $declaration = '<?xml version="1.0" encoding="UTF-8"?>';
    $stylesheet  = '<?xml-stylesheet type="text/css" href="../../../style/rss.css"?>';

    // 2. Remove ANY existing XML declaration at the top (flexible regex)
    // This looks for "<?xml" through to the closing "?>" and any trailing newlines
    $xmlData = preg_replace('/^<\?xml[^?]+\?>\s*/i', '', $xmlData);

    // 3. Reconstruct the file in the correct order
    $finalOutput = $declaration . "\n" . $stylesheet . "\n" . $xmlData;

    // Path to save
    $savePath = 'feeds/rss-feed.xml';

    if (!file_exists('feeds')) {
        mkdir('feeds', 0755, true);
    }

    // Write the file
    if (file_put_contents($savePath, $finalOutput) !== false) {
        http_response_code(200);
        echo 'RSS feed saved successfully';
    } else {
        http_response_code(500);
        echo 'Failed to write file';
    }
?>