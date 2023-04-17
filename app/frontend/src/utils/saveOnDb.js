const saveOnDb = async (data, website, category) => {
  // const { thumbnail, title, original_price, permalink } = apiData;
  const responseObj = { data, website, category };

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