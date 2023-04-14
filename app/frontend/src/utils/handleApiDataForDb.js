import axios from 'axios';


const saveOnDb = async (apiData) => {
    const { results: { thumbnail, title, original_price, permalink } } = apiData;

    const responseObj = { thumbnail, title, original_price, permalink }
  try {
    const response = await axios.post('http://localhost:3000/db/search', responseObj);
    return response;
  } catch (error) {
    console.error(error);
  }
};


export default saveOnDb;