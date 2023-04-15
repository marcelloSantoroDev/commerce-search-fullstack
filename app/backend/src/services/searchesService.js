const { searches } = require('../database/models')
const { verifyOnDb } = require('./validations');

const createSearch = async (data) => {
    const { category } = data;
    const { type, message } = await verifyOnDb(category);

    if (type) {
        return { type: 'found on db', message }
    }

    try {
        await searches.create(data);
        return { tyṕe: null, message: 'Created!' }
    } catch (error) {
        return { type: 'error', message: error.message }
    }
}

module.exports = {
    createSearch
}