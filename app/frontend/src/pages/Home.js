import React, { useContext } from 'react'
import SelectComp from '../components/Select'
import InputComp from '../components/Input'
import './CSS/Home.css'
import ButtonComp from '../components/Button'
import AppContext from '../context/AppContext'
import Card from '../components/Card'
import Loading from '../components/Loading'

function Home() {
  const { apiData, api, loading } = useContext(AppContext);
  const { results } = apiData;

  return (
    <div className='home'>
        <section className='search-section'>
          <div className="selects">
          <SelectComp type="Web" />
          <SelectComp type="Categories" />
          </div>
          <InputComp />
          <ButtonComp type="Search" />
        </section>
        <section className='render-section'>
          {
            loading ? <Loading /> :
            results?.map((product) => (
              <Card product={ product } api={ api === 'Buscape' ? 'Buscapé' : 'Meli' } />
            ))
          }
        </section>
    </div>
  )
}

export default Home