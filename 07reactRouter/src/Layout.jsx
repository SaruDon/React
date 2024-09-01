import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router' // 

const Layout = () => {
  return (
    <>

      <Header/>
      {/* // Header same rahega footer same rahega but uske andar ki chize change hogi */}
      <Outlet/>  
      
      <Footer/>

    </>
  )
}

export default Layout