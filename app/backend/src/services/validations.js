const { searches } = require('../database/models')

const verifyOnDb = async ({ category, website }) => {
    const result = await searches.findAll({ where: { category, website } });

    if (result.length === 0) return { type: null, message: '' };

    return { type: 'found on db', message: result };
}

module.exports = {
    verifyOnDb,
}