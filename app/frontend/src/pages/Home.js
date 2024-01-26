import React, { useContext, useEffect } from 'react'
import SelectComp from '../components/Select'
import './CSS/Home.css'
import ButtonComp from '../components/Button'
import AppContext from '../context/AppContext'
import Card from '../components/Card'
import Loading from '../components/Loading'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

function Home() {
  const { setApiData, apiData, loading } = useContext(AppContext);
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/') {
      setApiData({results: []})
    }
  },[location, setApiData])


  return (
    <div className='home'>
      <section className='search-section'>
        <div className="selects">
        <SelectComp type="Categories" />
        </div>
        <ButtonComp type="Search" />
        <Link className="go-to" to="/searches">
          Go to your searches
        </Link>
      </section>
      <section className='render-section'>
        {loading ?
          <Loading />
          :
          apiData.results?.filter((_e, i) => i < 6).map(product => (
            <Card key={product.id} product={product} />
          )
          )}
      </section>
    </div>
  )
}

export default Home;