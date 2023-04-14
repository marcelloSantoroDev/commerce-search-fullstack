import axios from 'axios';

const buscapeApi = async (query) => {
  const url = `http://localhost:3001/api/buscape/${query}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default buscapeApi;
