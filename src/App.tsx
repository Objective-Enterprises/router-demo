import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import TestPage from './TestPage'
import Navbar from './Navbar'
import Test1Page from './Test1Page'
import Test2Page from './Test2Page'
import HelloPage from './HelloPage'
import { useState } from 'react'
import ListPage from './ListPage'
import { CartItem } from './types'



export default function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  console.log('cart', cart)
  function addToCart (itemName: string) {
    const newItem = { name: itemName }
    const newCart = [...cart, newItem]
    setCart(newCart)
  }
  return (
    <>
      <h1>Router Demo</h1>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/test' element={<TestPage />}>
          <Route path='1' element={<Test1Page />} />
          <Route path='2' element={<Test2Page />} />
        </Route>
        <Route path='/hello/:username' element={<HelloPage />} />
        <Route
          path='/list'
          element={
            <ListPage addToCart={addToCart}/>
          }
        />
      </Routes>
    </>
  )
}
