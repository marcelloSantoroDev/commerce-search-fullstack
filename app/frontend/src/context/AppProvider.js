import React, { useState, useMemo } from 'react';
import AppContext from './AppContext';

function AppProvider ({ children }){
    const [ api, setApi ] = useState('');
    const [ category, setCategory ] = useState('');

    const values = useMemo(() => ({
        api,
        setApi,
        category,
        setCategory,
    }), [ api, category ]);

    return (
        <AppContext.Provider value={ values }>
            { children }
        </AppContext.Provider>
    )

}

export default AppProvider;