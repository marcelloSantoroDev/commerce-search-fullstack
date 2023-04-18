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
4. Execute o comando `docker build -t 'DB_NAME definido no .env' .` para construir a imagem para o MySQL.
5. Execute o `comando docker-compose up -d .` para subir o container do MySQL.
6. Execute o comando `npm run db` no terminal da sua máquina para criar o banco de dados e a tabela.