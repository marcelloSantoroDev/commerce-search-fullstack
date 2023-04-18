const app = require('./app');
const scraper = require('./utils/scraper');

const PORT = 3001;

const server = app.listen(PORT, async () => {
    console.log(`rodando na porta ${PORT}`);
});

module.exports = server;