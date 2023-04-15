import axios from 'axios';


const saveOnDb = async (apiData, website) => {
    const { results: { thumbnail, title, original_price, permalink } } = apiData;

    const responseObj = { website, thumbnail, title, original_price, permalink }
  try {
    const response = await axios.post('http://localhost:3000/db/searches', responseObj);
    return response;
  } catch (error) {
    console.error(error);
  }
};


export default saveOnDb;