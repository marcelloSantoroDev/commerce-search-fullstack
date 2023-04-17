const { searches } = require('../database/models')
const { verifyOnDb } = require('./validations');

const createSearch = async ({ data, website, category }) => {
    // const { title, thumbnail, original_price, permalink, website, category } = data;
    // const { type } = await verifyOnDb({ category, website });

    // if (type) {
    //     return { type: 'found on db', message: 'found on db' };
    // }

    try {
        await searches.bulkCreate(data);
        return { tyṕe: null, message: 'Created!' }
    } catch (error) {
        return { type: 'error', message: error.message }
    }
}

const getSearches = async (data) => {
    const { category, website } = data;
    const { type, results } = await verifyOnDb({ category, website });

    if (type) {
        return { type: 'found on db', results }
    }

    return { type: null, results: '' }
}

module.exports = {
    createSearch,
    getSearches,
}