const { searches } = require('../database/models')
const createSearch = async (data) => {
    try {
        await searches.create(data);
        return { tyṕe: null, message: 'Created!' }
    } catch (error) {
        return { type: error.type, message: error.message }
    }
}

module.exports = {
    createSearch
}