const saveOnDb = async (apiData, website, category) => {
  const { thumbnail, title, original_price, permalink } = apiData;
  const responseObj = { website, thumbnail, title, original_price, permalink, category };

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