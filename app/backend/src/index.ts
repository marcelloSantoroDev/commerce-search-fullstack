import app from "./app";
import fs from "fs";
import path from "path";
import scraper from "./utils/scraper";

const PORT = 3001;

const server = app.listen(PORT, async () => {
    await Promise.all([
        scraper('https://www.buscape.com.br/celular'),
        scraper('https://www.buscape.com.br/geladeira'),
        scraper('https://www.buscape.com.br/tv')
    ]);
    console.log(`rodando na porta ${PORT}`);
});



const __dirname = '/home/marcello-sonoro/GITHUB/desafios-tecnicos/lexart-fullstack/lexart-fullstack-test/app/backend/apis/'


app.get('/api/buscape/celular', async (_req, res) => {
   const filePath = path.join(__dirname, 'mobile.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao ler arquivo' });
        }
        return res.status(200).json(JSON.parse(data));
    });
});

app.get('/api/buscape/geladeira', async (_req, res) => {
    const filePath = path.join(__dirname, 'fridge.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao ler arquivo' });
        }
        return res.status(200).json(JSON.parse(data));
    });
});

app.get('/api/buscape/tv', async (_req, res) => {
    const filePath = path.join(__dirname, 'tv.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro ao ler arquivo' });
        }
        return res.status(200).json(JSON.parse(data));
    });
});

export default server;