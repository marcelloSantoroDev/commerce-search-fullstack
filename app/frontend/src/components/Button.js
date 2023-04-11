import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function ButtonComp(props) {
    const { type } = props;
  return (
     <Stack spacing={2} direction="row" alignSelf={'center'} minHeight={55.4}>
      <Button variant="contained">{ type }</Button>
      </Stack>
  )
}

export default ButtonComp