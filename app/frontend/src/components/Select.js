import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import './CSS/Select.css'

function SelectComp(props) {
  const { type } = props;
  return (
       <FormControl sx={{ m: 2, minWidth: 130 }}>
        <InputLabel id="demo-simple-select-helper-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Age"
        >
          {
            type === 'Web' ?
          <>
          <MenuItem value="Todas">Todas</MenuItem>
          <MenuItem value="MercadoLivre">MercadoLivre</MenuItem>
          <MenuItem value="Buscapé">Buscapé</MenuItem>
          </>
          :
          <>
          <MenuItem value="Geladeira">Geladeira</MenuItem>
          <MenuItem value="TV">TV</MenuItem>
          <MenuItem value="Celular">Celular</MenuItem>
          </>
          }
        </Select>
      </FormControl>
   
  )
}

export default SelectComp