
//import {discord, mastadon, reddit, telegram} from '../assets/index'
import {Header, Footer, Content} from '../components/index'
import React from 'react'

const Community = () => {
  return (
    <>
        <div className="relative  h-[3000px] w-screen bg-sky-100 mt-[70px]">
            <Header/>     
            <Content/>
            <Footer/> 
        </div>
    </>
  )
}

export default Community