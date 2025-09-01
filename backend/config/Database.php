<?php
class Database {
    private $host = "127.0.0.1";
    private $db_name = "indicart";
    private $username = "root";
    private $password = "Lupita@107"; // sua senha do MySQL
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = new PDO(
                "mysql:host={$this->host};dbname={$this->db_name};charset=utf8",
                $this->username,
                $this->password
            );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "Conexão OK!"; // opcional para teste
        } catch(PDOException $exception) {
            echo "Erro ao conectar: " . $exception->getMessage();
            exit;
        }

        return $this->conn;
    }
}
?>
