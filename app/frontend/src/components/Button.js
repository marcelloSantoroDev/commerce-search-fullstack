import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';
import dbApi from '../utils/dbApi';
import buscapeApi from '../utils/buscapeApi';
import saveOnDb from '../utils/saveOnDb';

function ButtonComp(props) {
  const { type } = props;
  const { category, api, setApiData, searched, setSearched, saved } = useContext(AppContext);
  const isCategorySaved = saved.product?.some((e) => e === category);
  const isApiSaved = saved.website?.some((e) => e === api);
  const isSaved = isCategorySaved && isApiSaved;

  const handleMeliClick = async () => {
    if (searched.length === 0) {
      if (isSaved) {
        const data = await dbApi();
        setApiData(data);
      } else {
        const data = await meliApi(category);
        setApiData(data);
        await Promise.all(data.results.map((card) => saveOnDb(card, 'meli', category)));
      }
    } else {
      if (isSaved) {
        const data = await dbApi();
        setApiData(data);
        setSearched('');
      } else {
        const data = await meliApi(searched);
        setApiData(data);
        setSearched('');
        await Promise.all(data.results.map((card) => saveOnDb(card, 'meli', category)));
      }
    }
  }

  const handleBuscapeClick = async () => {
    if (searched.length === 0) {
      if (isSaved) {
        const data = await dbApi();
        setApiData(data);
      } else {
        const data = await buscapeApi(category);
        setApiData(data);
        await Promise.all(data.results.map((card) => saveOnDb(card, 'buscape')))
      }
    } else {
      if (isSaved) {
        const data = await dbApi();
        setApiData(data);
        setSearched('');
      } else {
        const data = await buscapeApi(searched);
        setApiData(data);
        setSearched('');
        await Promise.all(data.results.map((card) => saveOnDb(card, 'buscape')))
      }
    }
  }

  return (
    <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={55.4}>
      <Button variant="contained" onClick={api === 'Buscape' ? handleBuscapeClick : handleMeliClick}>{type}</Button>
    </Stack>
  )
}

export default ButtonComp