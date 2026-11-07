<?php
require_once 'db.php';

header('Content-Type: application/json');

try {
    $stmt = $pdo->query("SELECT * FROM projects ORDER BY sort_order ASC");
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    error_log('projects.php query failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Could not load projects']);
    exit;
}

$projects = array_map(function ($row) {
    return [
        'name' => $row['name'],
        // ?? null keeps this working if the icon column hasn't been added yet
        'icon' => $row['icon'] ?? null,
        'desc' => $row['short_desc'],
        'detailedDesc' => $row['detailed_desc'],
        'images' => json_decode($row['images']),
        'github' => json_decode($row['github_links']),
    ];
}, $rows);

echo json_encode($projects);
