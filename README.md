# 🎨 indicart

**Site oficial da Indicart**, uma empresa responsável por conectar artistas e amantes de arte. Uma landing page criada para apresentar conteúdo artístico de forma interativa e visualmente agradável, onde é possível **explorar, vender e adquirir obras de arte digital**.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

[Sobre](#-sobre-o-projeto) · [Funcionalidades](#-funcionalidades) · [Tecnologias](#-tecnologias-utilizadas) · [Como executar](#%EF%B8%8F-como-executar-o-projeto) · [Estrutura](#-estrutura-do-projeto) · [Créditos](#-créditos-do-projeto)

---

## Em resumo

| | |
| --- | --- |
| **O que é** | Landing page de uma plataforma que conecta artistas e amantes de arte |
| **Foco** | Design visual, experiência do usuário e interfaces responsivas |
| **Frontend** | React (JSX) + Vite, com Bootstrap e Sass |
| **Backend** | PHP com API de cadastro e login |
| **Banco de dados** | MySQL |
| **Tipo** | Projeto desenvolvido na faculdade, em equipe |

---

## 📸 Demonstração

<!-- Quando o GIF estiver pronto, salve em frontend/public/images/demo.gif e descomente a linha abaixo -->
<!-- <img src="./frontend/public/images/demo.gif" alt="Demonstração das funcionalidades da Indicart" width="100%"> -->

🎬 GIF com todas as funcionalidades em breve.

---

## 📌 Sobre o projeto

O projeto é uma **landing page** desenvolvida na faculdade, utilizando **React** e **Vite** como bundler. O conteúdo da página vem de **dados estáticos em JSON**, para fins estudantis.

Na Indicart, a pessoa pode explorar ou até mesmo vender seu talento aplicado em suas criações e adquirir obras de arte digital de alta qualidade.

A aplicação é composta por:

| Camada | Tecnologia |
| --- | --- |
| Frontend | React (JSX) + Vite |
| Backend | PHP |
| Banco de dados | MySQL |
| Estilização | Bootstrap e Sass |
| Dados da página | JSON |

---

## 🚀 Funcionalidades

### 🏠 Página inicial

| Seção | O que mostra |
| --- | --- |
| **Abertura** | "Para artistas e amantes de arte", com artes animadas na entrada |
| **Explore a experiência** | Excelência artística, compra e venda, e segurança |
| **Quem somos** | Apresentação da Indicart como plataforma digital |
| **Cheio de artes digitais** | Carrossel de projetos e categorias (Personagens, Comics, FanArt e Concept, por enquanto só visuais) |
| **Encontre respostas e suporte** | Ajuda sobre anúncios e compras de artes |
| **Para encantar** | Carrossel com artes aplicadas e seus artistas |

### 👤 Cadastro e login

- Modal de **login** com CPF ou e-mail e senha
- **Cadastro em 2 etapas**: nome, CPF e data de nascimento, depois telefone e senha
- Máscaras nos campos e validação com mensagens de erro
- Senhas salvas com criptografia (hash) no banco
- Opções visuais de entrar com Google, Microsoft e Apple

### 🧭 Estrutura do site

- Header com busca e menu mobile
- Footer com links organizados em colunas
- Animações de entrada nas seções
- Layout responsivo

---

## 🛠 Tecnologias utilizadas

### Front-end

| Tecnologia | Para que serve |
| --- | --- |
| **React (JSX)** | Construção da interface em componentes |
| **Vite** | Bundler e servidor de desenvolvimento |
| **Bootstrap** | Layout responsivo e componentes |
| **CSS / SCSS** | Estilização organizada em módulos |
| **React Slick** | Carrosséis de artes |
| **React Input Mask** | Máscaras nos campos do cadastro |
| **Animate.css** | Animações de entrada |
| **JSON** | Dados estáticos do projeto |
| **npm** | Gerenciamento de dependências |

### Back-end

| Tecnologia | Para que serve |
| --- | --- |
| **PHP** | API de cadastro e login de usuários |
| **MySQL** | Armazenamento dos usuários |

---

## ⚙️ Como executar o projeto

**Pré-requisitos:** Node.js e um servidor local com Apache, PHP e MySQL (como o XAMPP).

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/lunajulia107/indicart.git
```

### 2️⃣ Rodar o frontend

📂 Acesse a pasta `frontend`, instale as dependências e inicie o servidor de desenvolvimento:

```bash
cd frontend
npm install
npm run dev
```

🌐 O frontend estará disponível em `http://localhost:<numero_da_porta>`.

### 3️⃣ Configurar o banco de dados

Crie um banco chamado `indicart` com a tabela `users`:

```sql
CREATE DATABASE indicart;
USE indicart;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    data_nascimento DATE NOT NULL,
    senha VARCHAR(255) NOT NULL
);
```

Depois, ajuste o usuário e a senha do seu MySQL em `backend/config/Database.php`.

### 4️⃣ Rodar o backend

Copie o conteúdo da pasta `backend` para uma pasta chamada `indicart` dentro do seu servidor local (no XAMPP, `htdocs/indicart`) e inicie o Apache e o MySQL.

> [!NOTE]
> O cadastro e o login enviam os dados para `http://localhost/indicart/api/user.php`. Por isso o backend precisa estar nesse endereço.

---

## 📁 Estrutura do projeto

```
indicart/
├── frontend/                   → aplicação React
│   ├── public/                 → arquivos públicos estáticos
│   │   ├── images/             → imagens do projeto
│   │   └── styles/             → arquivos CSS/SCSS
│   ├── src/                    → código fonte do frontend
│   │   ├── components/
│   │   │   ├── home/           → componentes da página inicial
│   │   │   └── structure/      → header, footer, menu e modal de login
│   │   ├── json/               → dados em JSON utilizados na aplicação
│   │   ├── App.jsx             → componente principal
│   │   └── main.jsx            → ponto de entrada do React
│   ├── index.html              → HTML principal
│   └── package.json            → configuração do npm
└── backend/                    → API em PHP
    ├── api/                    → endpoint de cadastro e login
    ├── config/                 → conexão com o banco
    ├── controllers/            → regras de cadastro e login
    └── models/                 → modelo de usuário
```

---

## 🤝 Créditos do projeto

Projeto acadêmico desenvolvido em equipe, com divisão de responsabilidades.

| Área | Responsável |
| --- | --- |
| 🖋️ Identidade Visual e Branding | Emily Souza |
| 💻 Front-end & UI/UX | Julia Gomes |
| 🎨 Ilustração e Artes Visuais | Samara Duarte |
| 🔍 Pesquisa e Divulgação | Camila Bonilha |

✉️ Para dúvidas ou sugestões, entre em contato: [rodriguesjuliaw23@gmail.com](mailto:rodriguesjuliaw23@gmail.com)
