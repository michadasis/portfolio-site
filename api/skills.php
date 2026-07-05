<?php
require_once 'db.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query("SELECT category, item FROM skills ORDER BY category, sort_order ASC");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    error_log('skills.php query failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Could not load skills']);
    exit;
}

$skills = [];
foreach ($rows as $row) {
    $skills[$row['category']][] = $row['item'];
}

echo json_encode($skills);
