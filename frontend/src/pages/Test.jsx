import React from 'react'
import {Header, Footer, Content} from '../components/index'
import InsertDB from '../components/InsertDB'
import CheckDB from '../components/CheckDB'

const Test = () => {
  return (
    <>
      <div className="relative  h-[8000px] w-screen bg-sky-100 mt-[70px]">
        <Header/>     
        <InsertDB/>
        <CheckDB/>
        <Footer/> 
      </div>
    </>
  )
}

export default Test