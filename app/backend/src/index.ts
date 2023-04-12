import app from "./app";
import scraper from "./utils/scraper";

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
    `Rodando na porta ${PORT}`
));

const fridgeUrl = 'https://www.buscape.com.br/geladeira'
const TVUrl = 'https://www.buscape.com.br/tv'
const mobileUrl = 'https://www.buscape.com.br/celular'

app.get('/api/buscape/celular', async (_req, res) => {
    const data = await scraper(mobileUrl);
    return res.status(200).json(data)
});

// app.get('/api/buscape/geladeira', (_req, res) => {
//     const data = scraper(fridgeUrl);
//     return res.status(200).json(data);
// })

// app.get('/api/buscape/celular', (_req, res) => {
//     const data = scraper(TVUrl);
//     return res.status(200).json(data);
// })

export default server;