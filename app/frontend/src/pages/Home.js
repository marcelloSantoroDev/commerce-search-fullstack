import React, { useContext } from 'react'
import SelectComp from '../components/Select'
import './CSS/Home.css'
import ButtonComp from '../components/Button'
import AppContext from '../context/AppContext'
import Card from '../components/Card'
import Loading from '../components/Loading'

function Home() {
  const { apiData, loading } = useContext(AppContext);
  const { results } = apiData;

  return (
    <div className='home'>
        <section className='search-section'>
          <div className="selects">
          <SelectComp type="Categories" />
          </div>
          <ButtonComp type="Search" />
        </section>
        <section className='render-section'>
          {
            loading ? <Loading /> :
            results?.filter((_e, i) => i < 6).map((product) => (
              <Card product={ product } />
            ))
          }
        </section>
    </div>
  )
}

export default Home