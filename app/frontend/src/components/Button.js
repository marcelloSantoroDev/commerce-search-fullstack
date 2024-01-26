import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';
import saveOnDb from '../utils/saveOnDb';
import fetchOnDB from '../utils/fetchOnDB';

function ButtonComp(props) {
  const { type } = props;
  const { category, setApiData, setLoading, setDbData } = useContext(AppContext);
  

  const handleFetchClick = async () => {
      setLoading(true)
      const data = await meliApi(category);
      setApiData(data);
      await Promise.all(data.results.filter((_e, i) => i < 6).map((card) => saveOnDb(card, 'meli', category)))
      setLoading(false);
  }

  const handleDbFetchClick = async () => {
    setLoading(true)
    const data = await fetchOnDB();
    const dbDataCategory = data.filter((card) => card.category === category);
    setDbData(dbDataCategory);
    setLoading(false);
  }

  return (
      <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={40.4}>
        <Button variant="contained" onClick={ type === 'Search' ? handleFetchClick : handleDbFetchClick }>{ type }</Button>
      </Stack>
  )
}

export default ButtonComp;