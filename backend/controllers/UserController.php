<?php
require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../config/Database.php'; 

class UserController {
    private $db;

    public function __construct() {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    // Cadastrar usuário
    public function register($data) {
        $user = new User($this->db);
        $user->nome = $data['nome'];
        $user->cpf = $data['cpf'];
        $user->data_nascimento = $data['data_nascimento'];
        $user->senha = $data['senha'];

        if ($user->create()) {
            return ['success' => true, 'message' => 'Usuário cadastrado com sucesso!'];
        } else {
            return ['success' => false, 'message' => 'Erro ao cadastrar usuário.'];
        }
    }

    // Login de usuário
    public function login($cpf, $senha) {
        $user = new User($this->db); // aqui estava $this->conn
        $result = $user->login($cpf, $senha);

        if ($result) {
            return [
                'success' => true,
                'user' => $result
            ];
        } else {
            return [
                'success' => false,
                'message' => 'CPF ou senha incorretos.'
            ];
        }
    } 
}
?>
