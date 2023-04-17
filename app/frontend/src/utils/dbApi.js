const dbApi = async ({ category, api }) => {

    const response = {
        category,
        website: api
    }

    try {
        const data = await fetch('http://localhost:3001/db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(response)
        });

        return data;
    } catch (error) {
        return `Error: ${error}`
    }

};

export default dbApi;