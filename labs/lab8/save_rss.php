<?php
// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

// Read and trim input
$xmlData = trim(file_get_contents('php://input'));

if (empty($xmlData)) {
    http_response_code(400);
    exit('No data received');
}

// Validate XML
libxml_use_internal_errors(true);
$xml = simplexml_load_string($xmlData);
if ($xml === false) {
    http_response_code(400);
    exit('Invalid XML received');
}

// 1. Define components (Broken up with '.' to prevent VSC highlighting bugs)
$declaration = '<?xml version="1.0" encoding="UTF-8"?' . '>';
$stylesheet  = '<?xml-stylesheet type="text/css" href="../../../style/rss.css"?' . '>';

// 2. Flexible Regex to remove any existing declaration
$xmlData = preg_replace('/^<\?xml[^?]+\?\x3E\s*/i', '', $xmlData);

// 3. Reconstruct final output
$finalOutput = $declaration . "\n" . $stylesheet . "\n" . $xmlData;

// Use __DIR__ to ensure it saves relative to this script's location
$savePath = __DIR__ . '/feeds/rss-feed.xml';

if (!file_exists(__DIR__ . '/feeds')) {
    mkdir(__DIR__ . '/feeds', 0755, true);
}

// Write the file
if (file_put_contents($savePath, $finalOutput) !== false) {
    http_response_code(200);
    echo 'RSS feed saved successfully to: ' . $savePath;
} else {
    http_response_code(500);
    echo 'Failed to write file - check folder permissions';
}
?>