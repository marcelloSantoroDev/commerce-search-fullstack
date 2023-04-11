const meliApi = async (query) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    try {
        const request = await fetch(url);
        const { results } = request.json();
        return results
    } catch (error) {
        throw new Error(error.message)
    }
}

export default meliApi;