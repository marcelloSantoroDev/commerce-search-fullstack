// import axios from 'axios';


// const saveOnDb = async (apiData, website) => {
//     const { results: { thumbnail, title, original_price, permalink } } = apiData;

//     const responseObj = { website, thumbnail, title, original_price, permalink }
//   try {
//     const response = await axios.post('http://localhost:3000/db/searches', responseObj);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// };

const saveOnDb = async (apiData, website) => {
  const { thumbnail, title, original_price, permalink } = apiData;
  const responseObj = { website, thumbnail, title, original_price, permalink };

  try {
    await fetch('http://localhost:3001/db/searches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(responseObj)
    });
  } catch (error) {
    return `Error: ${error}`
  }

};

export default saveOnDb;