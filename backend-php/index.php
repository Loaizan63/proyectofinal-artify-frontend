<?php
// Simple PHP backend para seguvia

declare(strict_types=1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?? '/';

// Remove everything before /api/ to handle paths like /folder/backend-php/index.php/api/huecos
if (strpos($path, '/api/') !== false) {
    $path = substr($path, strpos($path, '/api/'));
}

$segments = array_values(array_filter(explode('/', trim($path, '/'))));

// Expect routes like /api/huecos, /api/huecos/{id}, /api/huecos/direcSearch/{query}
if (!isset($segments[0]) || $segments[0] !== 'api' || !isset($segments[1]) || $segments[1] !== 'huecos') {
    respond(200, [
        'mensaje' => 'API de seguvia funcionando',
        'rutas_disponibles' => [
            'GET /api/huecos' => 'Obtener todos los huecos',
            'GET /api/huecos/{id}' => 'Obtener un hueco específico',
            'GET /api/huecos/direcSearch/{término}' => 'Buscar por dirección',
            'POST /api/huecos' => 'Crear nuevo hueco',
            'PUT /api/huecos/{id}' => 'Actualizar hueco',
            'DELETE /api/huecos/{id}' => 'Eliminar hueco'
        ],
        'ejemplo' => 'http://localhost/Proyecto_final-front/backend-php/index.php/api/huecos/'
    ]);
}

// Initialize database
$db = getConnection();
ensureSchema($db);

try {
    if ($method === 'GET' && count($segments) === 2) {
        // GET /api/huecos
        $rows = $db->query('SELECT * FROM huecos ORDER BY created_at DESC')->fetchAll(PDO::FETCH_ASSOC);
        respond(200, mapRows($rows));
    }

    if ($method === 'GET' && count($segments) === 3 && $segments[2] === 'direcSearch') {
        // invalid: needs term
        respond(400, ['error' => 'Falta el término de búsqueda']);
    }

    if ($method === 'GET' && count($segments) === 4 && $segments[2] === 'direcSearch') {
        $term = urldecode($segments[3]);
        $stmt = $db->prepare('SELECT * FROM huecos WHERE direccion LIKE :term ORDER BY created_at DESC');
        $stmt->execute([':term' => "%$term%"]); // simple contains search
        respond(200, mapRows($stmt->fetchAll(PDO::FETCH_ASSOC)));
    }

    if ($method === 'GET' && count($segments) === 3 && is_numeric($segments[2])) {
        $id = (int) $segments[2];
        $stmt = $db->prepare('SELECT * FROM huecos WHERE id = :id');
        $stmt->execute([':id' => $id]);
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$row) {
            respond(404, ['error' => 'Hueco no encontrado']);
        }
        respond(200, mapRow($row));
    }

    if ($method === 'POST' && count($segments) === 2) {
        $payload = json_decode(file_get_contents('php://input'), true) ?? [];
        validatePayload($payload);
        $stmt = $db->prepare('INSERT INTO huecos (direccion, categoria, observaciones) VALUES (:d, :c, :o)');
        $stmt->execute([
            ':d' => $payload['direccion'],
            ':c' => $payload['categoria'],
            ':o' => $payload['observaciones'],
        ]);
        $id = (int) $db->lastInsertId();
        $row = fetchById($db, $id);
        respond(201, mapRow($row));
    }

    if ($method === 'PUT' && count($segments) === 3 && is_numeric($segments[2])) {
        $id = (int) $segments[2];
        $payload = json_decode(file_get_contents('php://input'), true) ?? [];
        validatePayload($payload);
        $stmt = $db->prepare('UPDATE huecos SET direccion = :d, categoria = :c, observaciones = :o WHERE id = :id');
        $stmt->execute([
            ':d' => $payload['direccion'],
            ':c' => $payload['categoria'],
            ':o' => $payload['observaciones'],
            ':id' => $id,
        ]);
        $row = fetchById($db, $id);
        if (!$row) {
            respond(404, ['error' => 'Hueco no encontrado']);
        }
        respond(200, mapRow($row));
    }

    if ($method === 'DELETE' && count($segments) === 3 && is_numeric($segments[2])) {
        $id = (int) $segments[2];
        $stmt = $db->prepare('DELETE FROM huecos WHERE id = :id');
        $stmt->execute([':id' => $id]);
        respond(204, null);
    }

    respond(404, ['error' => 'Ruta no encontrada']);
} catch (Throwable $e) {
    respond(500, ['error' => 'Error interno', 'detail' => $e->getMessage()]);
}

function respond(int $status, $data): void
{
    http_response_code($status);
    if ($data === null) {
        exit;
    }
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function getConnection(): PDO
{
    $host = 'localhost';
    $dbname = 'artify';
    $username = 'root';
    $password = '';
    
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $pdo;
}

function ensureSchema(PDO $pdo): void
{
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS huecos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            direccion TEXT NOT NULL,
            categoria VARCHAR(255) NOT NULL,
            observaciones TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )'
    );
}

function validatePayload(array $payload): void
{
    $required = ['direccion', 'categoria', 'observaciones'];
    foreach ($required as $key) {
        if (!isset($payload[$key]) || trim((string) $payload[$key]) === '') {
            respond(400, ['error' => "Falta el campo $key"]);
        }
    }
}

function fetchById(PDO $pdo, int $id): ?array
{
    $stmt = $pdo->prepare('SELECT * FROM huecos WHERE id = :id');
    $stmt->execute([':id' => $id]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    return $row !== false ? $row : null;
}

function mapRows(array $rows): array
{
    return array_map('mapRow', $rows);
}

function mapRow(array $row): array
{
    return [
        '_id' => (string) $row['id'],
        'direccion' => $row['direccion'],
        'categoria' => $row['categoria'],
        'observaciones' => $row['observaciones'],
        'createdAt' => $row['created_at'],
    ];
}
