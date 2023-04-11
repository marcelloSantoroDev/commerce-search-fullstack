import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../utils/meliApi';

function ButtonComp(props) {
  const { type } = props;
  const { category, setApiData, searched, setSearched } = useContext(AppContext);

  const handleClick = async () => {
    if (searched.length === 0) {
      const data = await meliApi(category);
      setApiData(data);
    } else {
      const data = await meliApi(searched);
      setApiData(data);
      setSearched('');      
    }
  }

  return (
     <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={55.4}>
      <Button variant="contained" onClick={ handleClick }>{ type }</Button>
      </Stack>
  )
}

export default ButtonComp