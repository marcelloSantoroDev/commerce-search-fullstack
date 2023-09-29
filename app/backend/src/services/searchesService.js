const { searches } = require('../database/models');
const verifySearch = require('../utils/verifySearch');


const createSearch = async (data) => {
    const { title } = data;
    const message = await verifySearch(title)
    try {
        if (!message) {
            await searches.create(data);
            return { type: null, message: null };
        }
        return { type: null, message }
    } catch (error) {
        return { type: error.type, message: error.message }
    }
}

const getSearches = async () => {
    try {
        const data = await searches.findAll();
        return { type: null, message: data }
    } catch (error) {
        return { type: 'ERROR', message: error.message }
    }
}
module.exports = {
    createSearch,
    getSearches,
}