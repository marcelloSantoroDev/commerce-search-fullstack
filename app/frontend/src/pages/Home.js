import React from 'react'
import SelectComp from '../components/Select'

function Home() {
  return (
    <section className='home-section'>
        <SelectComp type="Web" />
        <SelectComp type="Categories" />
    </section>
  )
}

export default Home