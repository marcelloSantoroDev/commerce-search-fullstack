const searchesService = require('../services/searchesService');

const createSearch = async (req, res) => {
    const { title, thumbnail, original_price, permalink, website, category } = req.body;
    try {
        const { message } = await searchesService.createSearch({ title, thumbnail, original_price, permalink, website, category });
        return res.status(200).json(message)
    } catch (error) {
        return res.status(500).json({ Error: error })
    }
}

const getSearches = async (_req, res) => {
    try {
        const { message } = await searchesService.getSearches();
        return res.status(200).json(message)
    } catch (error) {
        return res.status(500).json({ Error: error })
    }
}

module.exports = {
    createSearch,
    getSearches,
}