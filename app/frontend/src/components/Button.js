import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';
import buscapeApi from '../utils/buscapeApi';

function ButtonComp(props) {
  const { type } = props;
  const { category, api, setApiData, searched, setSearched } = useContext(AppContext);

  const handleMeliClick = async () => {
    if (searched.length === 0) {
      const data = await meliApi(category);
      setApiData(data);
    } else {
      const data = await meliApi(searched);
      setApiData(data);
      setSearched('');      
    }
  }

    const handleBuscapeClick = async () => {
    if (searched.length === 0) {
      const data = await buscapeApi(category);
      setApiData(data);
    } else {
      const data = await buscapeApi(searched);
      setApiData(data);
      setSearched('');
    }
  }

  return (
     <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={55.4}>
      <Button variant="contained" onClick={ api === 'Buscape' ? handleBuscapeClick : handleMeliClick }>{ type }</Button>
      </Stack>
  )
}

export default ButtonComp