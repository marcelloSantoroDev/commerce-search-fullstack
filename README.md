## Descrição

A aplicação é capaz de pesquisar por produtos na API do Mercado Livre e exibir os resultados para o usuário.

O backend é construído em Node.js e usa a biblioteca express para criar um servidor web. Ele é responsável por intermediar as requisições do frontend para a API do Mercado Livre, fazendo cache das informações obtidas.

O frontend é construído em React.js, com uma interface simples para que o usuário possa selecionar a palavra-chave da pesquisa e ver os resultados da pesquisa. A aplicação conta com dois endpoints:

`'/'` é onde as pesquisas são feitas a partir das requisições para a API do Mercado Livre
`'/searches'` é onde as pesquisas já em cache são renderizadas a partir do back-end da aplicação

## Instruções para subir a aplicação front-end

1. Abra um terminal na pasta /app/frontend do projeto.
2. Execute o comando `npm install` para instalar as dependências do projeto.
3. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.

## Instruções para subir o servidor back-end (com Docker)


1. Certifique-se de ter o Docker instalado em sua máquina.
2. Certifique-se de configurar o arquivo .env.example, bem como retirar o .example
3. Abra um terminal na pasta /app/backend do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Execute o comando `docker build -t [DB_NAME definido no .env] .` para construir a imagem do MySQL.
6. Execute o comando `docker-compose up -d` para subir o container do MySQL.
7. Execute o comando `npm run db` no terminal da sua máquina para criar o banco de dados e a tabela.

##Description

The application is capable of searching for products in the Mercado Livre API and displaying the results to the user.

The backend is built in Node.js and uses the Express library to create a web server. It is responsible for mediating requests from the frontend to the Mercado Livre API, caching the obtained information.

The frontend is built in React.js, with a simple interface for the user to select the search keyword and view the search results. The application has two endpoints:

`'/'` is where searches are made based on requests to the Mercado Livre API.
`'/searches'` is where cached searches are rendered from the application's backend.

## Instructions to run the frontend application

1. Open a terminal in the /app/frontend folder of the project.
2. Execute the command npm install to install project dependencies.
3. Execute the command npm start to start the development server.
4. 
## Instructions to run the backend server (with Docker)

1. Ensure you have Docker installed on your machine.
2. Make sure to configure the .env.example file and remove the .example extension.
3. Open a terminal in the /app/backend folder of the project.
4. Execute the command `npm install` to install project dependencies.
5. Execute the command `docker build -t [DB_NAME defined in .env] .` to build the MySQL image.
6. Execute the command `docker-compose up -d` to start the MySQL container.
7. Execute the command `npm run db` in your machine's terminal to create the database and table.
