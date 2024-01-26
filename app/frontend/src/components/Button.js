import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';
import saveOnDb from '../utils/saveOnDb';

function ButtonComp(props) {
  const { type } = props;
  const { category, setApiData, setLoading } = useContext(AppContext);
  

  

  const handleFetchClick = async () => {
      setLoading(true)
      const data = await meliApi(category);
      setLoading(false)
      setApiData(data);
      await Promise.all(data.results.filter((_e, i) => i < 6).map((card) => saveOnDb(card, 'meli', category)))
      setLoading(false);
  }

  return (
      <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={40.4}>
        <Button variant="contained" onClick={ handleFetchClick }>{ type }</Button>
      </Stack>
  )
}

export default ButtonComp;