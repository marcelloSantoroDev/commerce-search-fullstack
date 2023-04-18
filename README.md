## Descrição

A aplicação é capaz de pesquisar por produtos na API do Mercado Livre e exibir os resultados para o usuário. Além disso, também faz scraping do site Buscapé para obter informações adicionais sobre os produtos encontrados.

O backend é construído em Node.js e usa a biblioteca express para criar um servidor web. Ele é responsável por intermediar as requisições do frontend para a API do Mercado Livre e para o scraper do Buscapé. Ele também faz cache das informações obtidas do Buscapé para melhorar o desempenho da aplicação.

O frontend é construído em React e usa a biblioteca axios para fazer as requisições para o backend. Ele apresenta uma interface simples para que o usuário possa inserir a palavra-chave da pesquisa e ver os resultados da pesquisa.

## Instruções para subir a aplicação front-end

1. Abra um terminal na pasta /app/frontend do projeto.
2. Execute o comando `npm install` para instalar as dependências do projeto.
3. Execute o comando `npm start` para iniciar o servidor de desenvolvimento.

## Instruções para subir o servidor back-end (com Docker)


1. Certifique-se de ter o Docker instalado em sua máquina.
2. Certifique-se de configurar o arquivo .env.example, bem como retirar o .example
3. Abra um terminal na pasta /app/backend do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Execute o comando `docker build -t 'DB_NAME definido no .env' .` para construir a imagem do MySQL.
6. Execute o `comando docker-compose up -d` para subir o container do MySQL.
7. Execute o comando `npm run db` no terminal da sua máquina para criar o banco de dados e a tabela.

## Description
The application is capable of searching for products in the Mercado Livre API and displaying the results to the user. In addition, it also scrapes the Buscapé website to obtain additional information about the found products.

The backend is built in Node.js and uses the express library to create a web server. It is responsible for mediating frontend requests to the Mercado Livre API and Buscapé scraper. It also caches the information obtained from Buscapé to improve the application's performance.

The frontend is built in React and uses the axios library to make requests to the backend. It presents a simple interface for the user to enter the search keyword and see the search results.

## Instructions to run the front-end application

1. Open a terminal in the /app/frontend folder of the project.
2. Run the command npm install to install the project dependencies.
3. Run the command npm start to start the development server.

## Instructions to run the back-end server (with Docker)

5. Make sure you have Docker installed on your machine.
6. Make sure to configure the .env.example file, as well as remove the .example extension.
7. Open a terminal in the /app/backend folder of the project.
8. Run the command npm install to install the project dependencies.
9. Run the command docker build -t 'DB_NAME defined in .env' . to build the MySQL image.
10. Run the docker-compose up -d command to start the MySQL container.
11. Run the command npm run db in your machine's terminal to create the database and table.
