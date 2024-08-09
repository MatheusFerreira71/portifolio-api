# API Express com Node.js `portifolio-api`

## Descrição

Esta API foi desenvolvida utilizando o framework **Express** em um ambiente **Node.js**. Ela oferece endpoints para o gerenciamento de arquivos e projetos, além de consultas de perfis. A API utiliza várias dependências para facilitar o desenvolvimento e garantir boas práticas.

## Dependências

A API utiliza as seguintes dependências principais:

- **Express**: Framework web para Node.js.
- **Prisma**: ORM para banco de dados.
- **Cors**: Middleware para habilitar CORS.
- **Dotenv**: Carregamento de variáveis de ambiente a partir de um arquivo `.env`.
- **express-async-errors**: Extensão para tratamento de erros assíncronos no Express.
- **Morgan**: Logger de requisições HTTP.
- **Multer**: Middleware para upload de arquivos.
- **Typescript**: Superset do JavaScript com tipagem estática.
- **Vitest**: Framework de testes.
- **Docker**: Para conteinerização da aplicação.

## Métodos HTTP

A API suporta os seguintes métodos HTTP:

- **GET**
- **POST**

## Endpoints

### 1. **POST /file-upload**
- Descrição: Faz o upload de um arquivo para o servidor.
- Parâmetros:
  - `file`: Multipart form, chave `file` do tipo arquivo.
- Resposta: JSON com detalhes do upload.

### 2. **GET /uploads/{nome}**
- Descrição: Acessa o arquivo enviado buscando pelo nome.
- Parâmetros:
  - `nome`: Nome do arquivo (route param).
- Resposta: Retorna o arquivo solicitado.

### 3. **GET /profile/one**
- Descrição: Busca um perfil pelo nome.
- Parâmetros:
  - `nome`: Nome do perfil (query param).
- Resposta: JSON com os detalhes do perfil.

### 4. **GET /project**
- Descrição: Busca todos os projetos.
- Resposta: JSON com uma lista de todos os projetos.

### 5. **POST /project**
- Descrição: Cadastra um novo projeto.
- Parâmetros:
  - `banner`: string
  - `codigo`: string
  - `descricao`: string
  - `preview`: string
  - `titulo`: string
  - `techNames`: string[]
- Resposta: JSON com os detalhes do projeto cadastrado.

## Formato de Resposta

Todas as respostas da API estão no formato **JSON**.

## Autenticação

Esta API **não possui** autenticação.

## Como Executar a API

Os seguintes comandos podem ser utilizados para executar e gerenciar a API:

- **test**: Executa os testes da API.
  ```bash
  npm test

- **dev**: Executa a API em ambiente de desenvolvimento.
  ```bash
  npm run dev

- **start**: Executa a API em ambiente de produção.
  ```bash
  npm start

- **build**: Compila os arquivos TypeScript para JavaScript.
  ```bash
  npm run build

- **dev-migrate**: Cria uma migration em desenvolvimento, atualiza o schema do banco de dados, e gera os tipos do Prisma.
  ```bash
  npm run dev-migrate:create

- **prod-migrate**: Atualiza o schema do banco de dados e gera os tipos do Prisma em produção.
  ```bash
  npm run prod-migrate:deploy

## Docker

Para executar a aplicação em um contêiner Docker, certifique-se de ter o Docker instalado e configure o Dockerfile e docker-compose.yml de acordo com as necessidades do seu ambiente.