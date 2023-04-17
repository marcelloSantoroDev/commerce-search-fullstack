const searchesService = require('../services/searchesService');

const createSearch = async (req, res) => {
    const { data, website, category } = req.body
    try {
        const { type, message } = await searchesService.
            createSearch({ data, website, category });

        if (type === 'error') return res.status(500).json({ message });

        return res.status(201).json({ message })

    } catch (error) {
        return res.status(500).json({ Error: error })
    }
};

const getSearches = async (req, res) => {
    const { category, website } = req.body;
    try {
        const { type, message } = await searchesService.
            getSearches({ category, website });

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