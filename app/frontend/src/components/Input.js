import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppContext from '../context/AppContext';
import './CSS/Input.css'

function InputComp() {
  const { searched, setSearched } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearched(value)
  }

  return (
    <div>
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
          onChange={ handleChange }
          value={ searched }
          style={{ backgroundColor: 'white' }}
        />
        </div>
     </Box>
    </div>  
  )
}

export default InputComp;