const getFromDb = async (apiData, website) => {

    try {
        await fetch('http://localhost:3001/db/searches', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify('')
        });
    } catch (error) {
        return `Error: ${error}`
    }

};

export default getFromDb;