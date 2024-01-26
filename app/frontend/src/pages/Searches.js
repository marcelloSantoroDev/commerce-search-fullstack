import React, { useContext } from 'react'
import SelectComp from '../components/Select'
import './CSS/Home.css'
import ButtonComp from '../components/Button'
import AppContext from '../context/AppContext'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'

function Home() {
  const { loading, dbData } = useContext(AppContext);


  return (
    <div className='home'>
      <section className='search-section'>
        <div className="selects">
          <SelectComp type="Categories" />
        </div>
        <ButtonComp type="Get" />
        <Link className="go-to" to="/">
          Go Home
        </Link>
      </section>
      <section className='render-section'>
        {loading ?
          <Loading />
          :
          dbData?.filter((_e, i) => i < 6).map(product => (
            <Card key={product.id} product={product} />
          )
          )}
      </section>
    </div>
  )
}

export default Home;