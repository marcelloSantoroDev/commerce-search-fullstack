import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Search"
          multiline
          maxRows={4}
        />
        </div>
     </Box>   
  )
}

export default Input