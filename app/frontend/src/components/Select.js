import React, { useContext } from 'react'
import './CSS/Select.css'
import AppContext from '../context/AppContext';

function SelectComp(props) {
  const { type } = props;
  const { api, setApi, category, setCategory, setSaved, saved } = useContext(AppContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (type === "Web") {
      setApi(value)
      setSaved({
        ...saved,
        website: [...saved.website, value]
      })
    } else {
      setCategory(value)
      setSaved({
        ...saved,
        product: [...saved.product, value]
      });
    }
  }

  return (
    <select
      value={type === 'Web' ? api : category}
      onChange={handleChange}
      className='select'
    >
      {
        type === "Web" ?
          <>
            <option value="">Web</option>
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