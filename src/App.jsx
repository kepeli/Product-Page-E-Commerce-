import Navbar from './components/Navbar'
import Body from './components/Body'

import './App.css'
import { useState } from 'react'
import StoreContext from './components/StoreContext'



export default function App() {
  const [count, setCount] = useState(0)
  const [addCart, setAddCart] = useState(0)
  const [orderCount, setOrderCount] = useState(0)
  const [store, setStore] = useState([])
 
  return (
    <>
    <StoreContext.Provider value={store}>
      <Navbar addCart={addCart} count={count} setCount={setCount} orderCount={orderCount} />
      
      <div className='bodyComponent'>
      <Body setStore={setStore} count={count} setCount={setCount} setAddCart={setAddCart} orderCount={orderCount} setOrderCount={setOrderCount} />
      </div>
    </StoreContext.Provider>
    </>
  )
}
