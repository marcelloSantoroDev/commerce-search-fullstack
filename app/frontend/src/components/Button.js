import React, { useContext, useEffect } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';
import buscapeApi from '../utils/buscapeApi';
import saveOnDb from '../utils/saveOnDb';

function ButtonComp(props) {
  const { type } = props;
  const { category, api, setApiData, searched, setSearched, apiData, setLoading } = useContext(AppContext);

  const handleMeliClick = async () => {
    setLoading(true)
    if (searched.length === 0) {
      const data = await meliApi(category);
      setLoading(false)
      setApiData(data);
      console.log(data.results);
      await Promise.all(data.results.map((card) => saveOnDb(card, 'meli')))
    } else {
      setLoading(true);
      const data = await meliApi(searched);
      setLoading(false);
      setApiData(data);
      setSearched('');      
      await Promise.all(data.results.map((card) => saveOnDb(card, 'meli')))
    }
  }

  useEffect(() => {
    console.log(apiData)
  }, [apiData])

    const handleBuscapeClick = async () => {
    if (searched.length === 0) {
      setLoading(true)
      const data = await buscapeApi(category);
      setLoading(false)
      setApiData(data);
      await Promise.all(data.results.map((card) => saveOnDb(card, 'buscape')))
    } else {
      setLoading(true)
      const data = await buscapeApi(searched);
      setLoading(false)
      setApiData(data);
      setSearched('');
      await Promise.all(data.results.map((card) => saveOnDb(card, 'buscape')))
    }
  }

  return (
     <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={55.4}>
      <Button variant="contained" onClick={ api === 'Buscape' ? handleBuscapeClick : handleMeliClick }>{ type }</Button>
      </Stack>
  )
}

export default ButtonComp