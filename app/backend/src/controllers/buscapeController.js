const scraper = require('../utils/scraper')
const path = require('path');
const fs = require('fs');

const scrape = async (req, res) => {
    const { query } = req.body;

    await scraper(query);
    
    const dirname = '/home/marcello-sonoro/GITHUB/desafios-tecnicos/lexart-fullstack/lexart-fullstack-test/app/backend/apis/'
    
    const filePath = path.join(dirname, `${query}.json`);
    
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Erro ao ler arquivo' });
            }
            return res.status(200).json(JSON.parse(data));
        });

}

module.exports = {
    scrape,
}