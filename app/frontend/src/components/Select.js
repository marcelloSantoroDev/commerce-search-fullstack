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
      value={ type === 'Web' ? api : category }
      onChange={ handleChange }
      className='select'
      >
        {
        type === "Web" ?
        <>
        <option value="">Web</option>
        <option value="Todas">Todas</option>
        <option value="MecadoLivre">MercadoLivre</option>
        <option value="Buscape">Buscapé</option>
        </>
          :
        <>
        <option value="">Categories</option>
        <option value="geladeira">Geladeira</option>
        <option value="tv">TV</option>
        <option value="celular">Celular</option>
        </>
        }
      </select>
  )
}

export default SelectComp