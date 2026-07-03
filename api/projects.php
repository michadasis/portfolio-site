<?php
require_once 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://michadasis.com'); // restrict to your domain if you like

$stmt = $pdo->query("SELECT name, short_desc, detailed_desc, images, github_links FROM projects ORDER BY sort_order ASC");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

$projects = array_map(function ($row) {
    return [
        'name' => $row['name'],
        'desc' => $row['short_desc'],
        'detailedDesc' => $row['detailed_desc'],
        'images' => json_decode($row['images']),
        'github' => json_decode($row['github_links']),
    ];
}, $rows);

echo json_encode($projects);
