const searchesService = require('../services/searchesService');

const createSearch = async (req, res) => {
    const { title, thumbnail, original_price, permalink } = req.body;
    try {
        const { type, message } = await searchesService.createSearch({ title, thumbnail, original_price, permalink });
        return res.status(200).json(message)
    } catch (error) {
        return res.status(500).json({ Error: error })
    }
}

module.exports = {
    createSearch
}