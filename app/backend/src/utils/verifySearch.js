const { searches } = require('../database/models');

const verifySearch = async (title) => {
    try {
        const searched = await searches.findOne({ where: { title } })

        if (!searched) {
            return null; 
        }

        return searched;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = verifySearch