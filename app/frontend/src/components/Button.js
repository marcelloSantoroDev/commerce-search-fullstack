import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';
import saveOnDb from '../utils/saveOnDb';
import fetchOnDB from '../utils/fetchOnDB';

function ButtonComp(props) {
  const { type } = props;
  const { category, setApiData, setLoading, setDbData, setCategory, setDbDataBool } = useContext(AppContext);
  

  const handleFetchClick = async () => {
      setLoading(true)
      const data = await meliApi(category);
      setApiData(data);
      await Promise.all(data.results.filter((_e, i) => i < 6).map((card) => saveOnDb(card, 'meli', category)))
      setLoading(false);
      setCategory("");
  }

  const handleDbFetchClick = async () => {
    setLoading(true)
    const data = await fetchOnDB();
    const dbDataCategory = data.filter((card) => card.category === category);
    const checkData = dbDataCategory.length > 0;
    setDbDataBool(checkData);
    setDbData(dbDataCategory);
    setLoading(false);
    setCategory("");
  }

  return (
      <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={40.4}>
      <Button variant="contained" onClick={() => type === 'Search' ? handleFetchClick() : handleDbFetchClick()}>{ type }</Button>
      </Stack>
  )
}

export default ButtonComp;