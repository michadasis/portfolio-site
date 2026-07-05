<?php
// Database connection. Reads credentials from config.php,
// which is gitignored and lives only on the server.

// Never show raw PHP errors/paths to visitors; log them instead.
ini_set('display_errors', '0');
error_reporting(E_ALL);
ini_set('log_errors', '1');

header('Access-Control-Allow-Origin: https://michadasis.com');

// These endpoints are read-only lookups — reject anything but GET.
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/config.php';

try {
    $pdo = new PDO(
        "mysql:host=$DB_HOST;dbname=$DB_NAME;charset=utf8mb4",
        $DB_USER,
        $DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (PDOException $e) {
    error_log('DB connection failed: ' . $e->getMessage());
    http_response_code(500);
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}
