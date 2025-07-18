import React from 'react'
import {Header, Footer, Content} from '../components/index'
import AuthComponent from '../components/AuthComponent'
//import InsertDB from '../components/InsertDB'
//import CheckDB from '../components/CheckDB'

const Login = () => {
  return (
    <>
      <div className="relative  h-[8000px] w-screen bg-sky-100 mt-[70px]">
        <Header/>     
        <AuthComponent/>
        <Footer/> 
      </div>
    </>
  )
}

export default Login