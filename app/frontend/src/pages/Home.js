import React from 'react'
import SelectComp from '../components/Select'
import InputComp from '../components/Input'
import './CSS/Home.css'
import ButtonComp from '../components/Button'

function Home() {
  return (
    <div className='home'>
        <section className='search-section'>
        <SelectComp type="Web" />
        <SelectComp type="Categories" />
        <InputComp />
        <ButtonComp type="Search" />
        </section>
    </div>
  )
}

export default Home