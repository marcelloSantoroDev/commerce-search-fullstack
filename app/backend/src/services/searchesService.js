const { searches } = require('../database/models');
const verifySearch = require('../utils/verifySearch');


const createSearch = async (data) => {
    const { title } = data;
    const verify = await verifySearch(title)
    try {
        if (!verify) {
            await searches.create(data);
        }
        return { type: null, message: 'Created!' }
    } catch (error) {
        return { type: error.type, message: error.message }
    }
}

module.exports = {
    createSearch
}