import React, { useContext } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppContext from '../context/AppContext';
import meliApi from '../Utils/meliApi';

function ButtonComp(props) {
  const { type } = props;
  const { category, setApiData } = useContext(AppContext);

  const handleClick = async () => {
    const data = await meliApi(category);
    setApiData(data)
  }

  return (
     <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={55.4}>
      <Button variant="contained" onClick={ handleClick }>{ type }</Button>
      </Stack>
  )
}

export default ButtonComp