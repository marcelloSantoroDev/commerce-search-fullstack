import React, { useContext, useEffect } from 'react'
import SelectComp from '../components/Select'
import './CSS/Home.css'
import ButtonComp from '../components/Button'
import AppContext from '../context/AppContext'
import Card from '../components/Card'
import Loading from '../components/Loading'

function Home() {
  const { apiData, loading, dbData } = useContext(AppContext);


  return (
    <div className='home'>
        <section className='search-section'>
          <div className="selects">
          <SelectComp type="Categories" />
          </div>
          <ButtonComp type="Search" />
        </section>
        <section className='render-section'>
        {loading ? (
          <Loading />
        ) : (
          dbData.length > 0 ? (
            // Se dbData tem dados, renderize com base nele
            dbData.filter((_e, i) => i < 6).map(product => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            // Se dbData está vazio, renderize com base nos dados da API
            apiData.results?.filter((_e, i) => i < 6).map(product => (
              <Card key={product.id} product={product} />
            ))
          )
        )}
        </section>
    </div>
  )
}

export default Home