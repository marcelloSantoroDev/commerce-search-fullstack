// import axios from 'axios';

// const buscapeApi = async (query) => {
//   const url = `http://localhost:3001/api/buscape/${query}`;
//   try {
//     const response = await axios.get(url);
//     return response.data.results;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export default buscapeApi;

const buscapeApi = async (query) => {

  const response = { query };

  try {
    const data = await fetch('http://localhost:3001/api/buscape', {
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

export default buscapeApi;