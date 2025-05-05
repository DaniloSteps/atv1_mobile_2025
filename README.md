# API Loja - MVC com Node.js

API RESTful para gerenciamento de clientes e produtos, seguindo o padrão MVC.

---

## 📁 Estrutura do Projeto (MVC)

src/
├── models/ # Camada de Model (Interação com o banco)
│ ├── clienteModel.js
│ └── produtoModel.js
├── controllers/ # Camada de Controller (Lógica de negócio)
│ ├── clienteController.js
│ └── produtoController.js
├── routes/ # Camada de Rotas (Definição dos endpoints)
│ ├── clienteRoutes.js
│ └── produtoRoutes.js
└── server.js # Ponto de entrada da aplicação

### Funcionamento do MVC:
1. **Model**: Responsável pela comunicação com o banco de dados
2. **Controller**: Processa requisições, aplica regras e retorna respostas
3. **Routes**: Mapeia URLs para métodos do Controller

---

## Recursos da API

### 1. Cliente
Gerencia informações de clientes:
```json
{
  "id": 1,
  "nome": "Maria Silva",
  "altura": 1.68
}
```

### 2. Produto

Gerencia cadastro de produtos:
```json
{
  "id": 1,
  "nome": "Smartphone",
  "preco": 1999.90,
  "descricao": "Modelo Premium"
}
```

## Rotas Disponíveis
**Clientes**

Método|Endpoint|Ação
-|-|-
GET|/cliente|Lista clientes
POST|/cliente|Cria novo cliente
PUT|/cliente/:id|Atualiza cliente pelo ID
DELETE|/cliente/:id|Exclui cliente pelo ID

**Produtos**

Método|Endpoint|Ação
-|-|-
GET|/produto|Lista todos os produtos
GET|/produto/:id|Busca produto por ID
POST|/produto|Cria novo produto
PUT|/produto/:id|Atualiza produto pelo ID
DELETE|/produto/:id|Exclui produto pelo ID
