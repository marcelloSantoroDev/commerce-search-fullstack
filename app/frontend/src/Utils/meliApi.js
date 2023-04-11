const meliApi = async (query) => {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
    try {
        const request = await fetch(url);
        const response = request.json();
        return response;
    } catch (error) {
        throw new Error(error.message)
    }
}

export default meliApi;