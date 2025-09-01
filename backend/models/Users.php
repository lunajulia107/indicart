<?php
class User {
    private $conn;
    private $table = 'users';

    public $id;
    public $nome;
    public $cpf;
    public $data_nascimento;
    public $senha;

    public function __construct($db) {
        $this->conn = $db;
    }

    // Cria um novo usuário
    public function create() {
        $query = "INSERT INTO {$this->table} 
                  (nome, cpf, data_nascimento, senha) 
                  VALUES (:nome, :cpf, :data_nascimento, :senha)";

        $stmt = $this->conn->prepare($query);

        // Sanitiza dados
        $this->nome = htmlspecialchars(strip_tags($this->nome));
        $this->cpf = htmlspecialchars(strip_tags($this->cpf));
        $this->data_nascimento = htmlspecialchars(strip_tags($this->data_nascimento));
        $this->senha = password_hash($this->senha, PASSWORD_DEFAULT);

        // Bind
        $stmt->bindParam(":nome", $this->nome);
        $stmt->bindParam(":cpf", $this->cpf);
        $stmt->bindParam(":data_nascimento", $this->data_nascimento);
        $stmt->bindParam(":senha", $this->senha);

        return $stmt->execute();
    }

    // Login de usuário
    public function login($cpf, $senha) {
        $query = "SELECT id, nome, cpf, data_nascimento, senha FROM {$this->table} WHERE cpf = :cpf LIMIT 1";
        $stmt = $this->conn->prepare($query);

        $cpf = htmlspecialchars(strip_tags($cpf));
        $stmt->bindParam(":cpf", $cpf);

        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($senha, $user['senha'])) {
            unset($user['senha']); // remove a senha do retorno
            return $user;
        }

        return false; // login inválido
    }

    // Método extra: busca usuário pelo ID
    public function getById($id) {
        $query = "SELECT id, nome, cpf, data_nascimento FROM {$this->table} WHERE id = :id LIMIT 1";
        $stmt = $this->conn->prepare($query);

        $id = htmlspecialchars(strip_tags($id));
        $stmt->bindParam(":id", $id);

        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}
?>
