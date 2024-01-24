const meliApi = async (query) => {
    console.log('CAIU NO FETCH API');
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
    try {
        const request = await fetch(url);
        const response = await request.json();
        return response;

    } catch (error) {
        throw new Error(error.message)
    }
}

export default meliApi;