<?php
// db_operations.php

// Database connection details
$host = 'localhost';
$db   = 'technexus';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

// Function to find a user by email
function findUser($email) {
    global $pdo;
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    return $stmt->fetch();
}

// Function to add a new user
function addUser($email, $password) {
    global $pdo;
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    return $stmt->execute([$email, $hashedPassword]);
}

// Handle incoming requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $action = $data['action'] ?? '';

    switch ($action) {
        case 'login':
            $user = findUser($data['email']);
            if ($user && password_verify($data['password'], $user['password'])) {
                echo json_encode(['success' => true, 'user' => ['email' => $user['email']]]);
            } else {
                echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
            }
            break;
        case 'signup':
            $existingUser = findUser($data['email']);
            if ($existingUser) {
                echo json_encode(['success' => false, 'message' => 'Email already in use']);
            } else {
                $result = addUser($data['email'], $data['password']);
                echo json_encode(['success' => $result, 'message' => $result ? 'Signup successful' : 'Signup failed']);
            }
            break;
        default:
            echo json_encode(['success' => false, 'message' => 'Invalid action']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
