const { searches } = require('../database/models')

const verifyOnDb = async (category) => {
    const result = await searches.findAll({ where: { category } })

    if(result.length === 0) return { type: null, message: '' };

    return { type: 'search found', message: result };
}

module.exports = {
    verifyOnDb,
}