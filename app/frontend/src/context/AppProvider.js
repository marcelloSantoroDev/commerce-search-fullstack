import React, { useState, useMemo } from 'react';
import AppContext from './AppContext';

function AppProvider ({ children }){
    const [api, setApi] = useState('');
    const [category, setCategory] = useState('');
    const [searched, setSearched] = useState('');
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cache, setCache] = useState([]);

    const values = useMemo(() => ({
        api,
        setApi,
        category,
        setCategory,
        searched,
        setSearched,
        apiData,
        setApiData,
        loading,
        setLoading,
        cache,
        setCache
    }), [api, category, searched, apiData, loading, cache]);

    return (
        <AppContext.Provider value={ values }>
            { children }
        </AppContext.Provider>
    )

}

export default AppProvider;