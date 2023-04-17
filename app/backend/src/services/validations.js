const { searches } = require('../database/models')

const verifyOnDb = async ({ category, website }) => {
    const results = await searches.findAll({ where: { category, website } });

    if (results.length === 0) return { type: null, message: '' };

    return { type: 'found on db', results };
}

module.exports = {
    verifyOnDb,
}