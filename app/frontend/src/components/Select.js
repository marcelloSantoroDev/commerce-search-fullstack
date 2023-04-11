import React, { useContext } from 'react'
import './CSS/Select.css'
import AppContext from '../context/AppContext';

function SelectComp(props) {
  const { type } = props;
  const { api, setApi, category, setCategory } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    type === 'Web' ? setApi(value) : setCategory(value);
  }

  return (
      <select
      value={ api || category }
      onChange={ handleChange }
      className='select'
      >
        {
        type === "Web" ?
        <>
        <option value="">Web</option>
        <option value="Todas">Todas</option>
        <option value="MecadoLivre">MercadoLivre</option>
        <option value="Celular">Buscapé</option>
        </>
          :
        <>
        <option value="">Categories</option>
        <option value="Geladeira">Geladeira</option>
        <option value="TV">TV</option>
        <option value="Celular">Celular</option>
        </>
        }
      </select>
  )
}

export default SelectComp