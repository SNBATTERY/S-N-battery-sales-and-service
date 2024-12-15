<?php
// Redirect HTTP to HTTPS
if (!isset($_SERVER['HTTPS']) || $_SERVER['HTTPS'] !== 'on') {
    header("Location: https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'], true, 301);
    exit();
}

// Redirect www to non-www
if (strpos($_SERVER['HTTP_HOST'], 'www.') === 0) {
    header("Location: https://snbatterysalesandservice.com" . $_SERVER['REQUEST_URI'], true, 301);
    exit();
}
?>