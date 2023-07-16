import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ListProduct from './components/ListProduct'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import ProductList from './pages/ProductList'
import SideBar from './components/SideBar'
import Main from './components/Main'

function App() {

  return (
    <>
      {/* <Header/> */}
      <Main/>
      {/* <Footer/> */}
      {/* <ProductList/> */}
    </>
  )
}

export default App
