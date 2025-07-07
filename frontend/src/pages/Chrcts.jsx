import React from 'react'
import {Header, Footer, CharCard} from '../components/index'

const Chrcts = () => {
  return (
    <>
      <div className="relative  h-[3000px] w-screen bg-sky-100 mt-[70px]">
        <Header/>     
        <CharCard/>
        <Footer/> 
      </div>
    </>
  )
}

export default Chrcts