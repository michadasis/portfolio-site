<?php
require_once 'db.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: https://michadasis.com'); // restrict to your domain if you like

$stmt = $pdo->query("SELECT category, item FROM skills ORDER BY category, sort_order ASC");
$rows = $stmt->fetchAll(PDO::FETCH_ASSOC);

$skills = [];
foreach ($rows as $row) {
    $skills[$row['category']][] = $row['item'];
}

echo json_encode($skills);
