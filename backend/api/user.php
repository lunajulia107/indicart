<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json"); 
require_once '../controllers/UserController.php';

// Pega os dados do body da requisição
$data = json_decode(file_get_contents("php://input"), true);

// Instancia o controller
$controller = new UserController();

// Verifica se é cadastro ou login pelo parâmetro "action"
$action = $_GET['action'] ?? '';

switch ($action) {
    case 'register':
        if (!isset($data['nome'], $data['cpf'], $data['data_nascimento'], $data['senha'])) {
            echo json_encode(['success' => false, 'message' => 'Dados incompletos']);
            exit;
        }
        $response = $controller->register($data);
        break;

    case 'login':
        if (!isset($data['cpf'], $data['senha'])) {
            echo json_encode(['success' => false, 'message' => 'CPF e senha são obrigatórios']);
            exit;
        }
        $response = $controller->login($data['cpf'], $data['senha']);
        break;

    default:
        $response = ['success' => false, 'message' => 'Ação inválida'];
        break;
}

echo json_encode($response);
?>
