import axios from 'axios';

const buscapeApi = async (query) => {
  
  const url = `http://localhost:3001/api/buscape`;
  try {
    const responseObj = { query };
    const response = await axios.post(url, responseObj);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default buscapeApi;