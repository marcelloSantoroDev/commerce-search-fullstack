const searchesService = require('../services/searchesService');

const createSearch = async (req, res) => {
    const { title, thumbnail, original_price, permalink, website, category } = req.body;
    try {
        const { type, message } = await searchesService.
            createSearch({ title, thumbnail, original_price, permalink, website, category });

        if (type === 'found on db') return res.status(200).json({ message });
        if (type === 'error') return res.status(500).json({ message });

        return res.status(201).json({ message })

    } catch (error) {
        return res.status(500).json({ Error: error })
    }
};

const getSearches = async (req, res) => {
    const { website, category } = req.body;
    try {
        const { type, message } = await searchesService.
            getSearches({ website, category });

        if (type === 'found on db') return res.status(200).json({ message });

        return res.status(404).json('Not Found')
    } catch (error) {
        return res.status(500).json({ Error: error })
    }
}

module.exports = {
    createSearch,
    getSearches,
}