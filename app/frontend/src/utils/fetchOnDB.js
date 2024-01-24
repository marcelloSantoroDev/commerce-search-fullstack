const fetchOnDB = async () => {
    console.log('CAIU NO FETCH DB');
    try {
        const response = await fetch('http://localhost:3001/db/searches', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            // Se a resposta é bem-sucedida (status 200 OK), extrai os dados da resposta
            const data = await response.json();
            return data || [];
        } else {
            // Se a resposta não é bem-sucedida, lança um erro com o status da resposta
            throw new Error(`Erro na requisição: ${response.status}`);
        }
    } catch (error) {
        // Se houver algum erro na requisição, você pode lidar com ele aqui
        console.error('Erro na requisição:', error);
        throw new Error(error.message);
    }
};

export default fetchOnDB;
