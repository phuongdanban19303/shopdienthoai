import { Route, Routes } from 'react-router-dom'
import './App.css'
import CartPage from './Page/CartPage'
import CheckoutPage from './Page/CheckoutPage'
import DetailPage from './Page/DetailPage'
import HomePage from './Page/HomePage'
import LoginPage from './Page/LoginPage'
import RegisterPage from './Page/RegisterPage'
import ShopPage from './Page/ShopPage'
import UserProvider from './Context/UserContext'
import CartProvider from './Context/Cartcontext'


function App() {
  return (
    <>
    <CartProvider>
    <UserProvider>
   <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/shop' element={<ShopPage/>} />
      <Route path='/detail/:id' element={<DetailPage/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/checkout' element={<CheckoutPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
    </UserProvider>
    </CartProvider>
       
    </>
  )
}

export default App