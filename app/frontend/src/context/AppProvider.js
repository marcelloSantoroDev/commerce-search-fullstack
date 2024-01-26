import React, { useState, useMemo, useEffect } from 'react';
import AppContext from './AppContext';
import fetchOnDB from '../utils/fetchOnDB';

function AppProvider ({ children }){
    const [api, setApi] = useState('');
    const [category, setCategory] = useState('');
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cache, setCache] = useState([]);
    const [dbData, setDbData] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await fetchOnDB();
                setDbData(request);
                console.log("REQUEST: ",request);
            } catch (error) {
                // Trate erros, se houver
            }
        };

        fetchData(); 
    }, [])

    useEffect(() => {
        console.log("DB DATA (useEffect): ", dbData);
    }, [dbData]);


    const values = useMemo(() => ({
        api,
        setApi,
        category,
        setCategory,
        apiData,
        setApiData,
        loading,
        setLoading,
        cache,
        setCache,
        dbData,
        setDbData,
    }), [api, category, apiData, loading, cache, dbData]);

    return (
        <AppContext.Provider value={ values }>
            { children }
        </AppContext.Provider>
    )

}

export default AppProvider;