## 📔 Sobre

Aplicação desenvolvida para realizar a conversão entre duas moedas, utilizando taxas de conversões atualizadas de um serviço externo, no qual foi consumido a API [api.exchangeratesapi.io].

A aplicação foi divida em módulos, que no caso existe somente um, transactions, onde estarão todos os arquivos pertinentes a este domínio.

---

## :rocket: Tecnologias Utilizadas

:floppy_disk: Bancos de dados:

- SQLite - Bancos de dados embedded

🌎 Backend:

- NodeJS;
- Express - Framework para NodeJS para microserviços
- TypeScript - Superset de JS para facilitar a codificação da aplicação
- Knex - Querybuilder para NodeJS para conectar ao SQLite
- Celabrate - Validação dos dados nas rotas
- Axios - Cliente HTTP para fazer requisições
- Express-Async-Errors: Tratativa de erro de forma global.

📔 Padronização de Código:

- ESLint
- Prettier
- EditorConfig

---

## 👨‍💻️ Como Usar :

### Clonando e Acessando Projeto

```shell
$ git clone https://matheusjouan@bitbucket.org/recrutamento_jya_nodejs/recrutamento-conversor-nodejs-matheusjouan_hotmail.com.git
```

### Iniciando o Servidor Backend (localhost:3333)

```shell
$ cd recrutamento-conversor-nodejs-matheusjouan_hotmail.com
$ yarn install

## Criação da Tabela
$ yarn knex:migrate

## Execução do backend
$ yarn dev:server
```

---

## :hammer: Features Implementadas

### Backend:

- [x] Realização da Conversão de Moedas
- [x] Salvo no banco de dados todas as transações realizadas
- [x] Consulta de todas transações realizadas pelo usuário
