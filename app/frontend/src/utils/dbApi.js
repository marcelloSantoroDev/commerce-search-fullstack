import axios from 'axios';

const dbApi = async (query) => {
    const url = 'http://localhost:3001/db/searches';
    try {
        const response = await axios.get(url);
        return response.data.message;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default dbApi;
