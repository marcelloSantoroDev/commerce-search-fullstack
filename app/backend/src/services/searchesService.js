const { searches } = require('../database/models')
const { verifyOnDb } = require('./validations');

const createSearch = async (data) => {
    const { category, website } = data;
    const { type } = await verifyOnDb({ category, website });

    if (type) {
        return { type: 'found on db', message: 'found on db' };
    }

    try {
        await searches.create(data);
        return { tyṕe: null, message: 'Created!' }
    } catch (error) {
        return { type: 'error', message: error.message }
    }
}

const getSearches = async (data) => {
    const { category, website } = data;
    const { type, message } = await verifyOnDb({ category, website });

    if (type) {
        return { type: 'found on db', message }
    }

    return { type: null, message: '' }
}

module.exports = {
    createSearch,
    getSearches,
}