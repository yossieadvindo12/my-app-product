import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ListProduct from './components/ListProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      <ListProduct/>
    </>
  )
}

export default App
