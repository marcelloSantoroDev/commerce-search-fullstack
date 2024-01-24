import React, { useContext } from 'react'
import './CSS/Select.css'
import AppContext from '../context/AppContext';


function SelectComp(props) {
  const { category, setCategory} = useContext(AppContext);

  const handleChange = async ({ target }) => {
    const { value } = target;
    setCategory(value);
  }

  return (
      <select
      value={ category }
      onChange={ handleChange }
      className='select'
      >
      <>
        <option value="">Categories</option>
        <option value="geladeira">Geladeira</option>
        <option value="tv">TV</option>
        <option value="celular">Celular</option>
      </>
      </select>
  )
}

export default SelectComp