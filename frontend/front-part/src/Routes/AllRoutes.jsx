import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminPages/AdminDashboard'
import AdminLogin from './AdminPages/AdminLogin'
import MerchantDashboard from './MerchantPages/MerchantDashboard'
import MerchantLogin from './MerchantPages/MerchantLogin'
import MerchantSignUp from './MerchantPages/MerchantSignUp'
import Cart from './UserPages/Cart'
import Home from './UserPages/Home'
import ProductsPage from './UserPages/ProductsPage'
import SingleProductPage from './UserPages/SingleProductPage'
import UserLogin from './UserPages/UserLogin'
import UserSignUp from './UserPages/UserSignUp'
import WishList from './UserPages/WishList'

const AllRoutes = () => {
  return (
    <Routes>

      {/* user routes */}
      <Route path='/' element={<Home/>} />
      <Route path='/cart_page' element={<Cart/>} />
      <Route path='/wishlist_page' element={<WishList/>} />
      <Route path='/user_login' element={<UserLogin/>} />
      <Route path='/user_signup' element={<UserSignUp/>} />
      <Route path='/products_page' element={<ProductsPage/>} />
      <Route path='/Single_product_page/:Id' element={<SingleProductPage/>} />



      {/* admin routes */}
      <Route path='/admin_dashboard' element={<AdminDashboard/>} />
      <Route path='/admin_login' element={<AdminLogin/>} />

      {/* merchant routes */}
      <Route path='/merchant_dashboard' element={<MerchantDashboard/>} />
      <Route path='/merchant_login' element={<MerchantLogin/>} />
      <Route path='/merchant_signup' element={<MerchantSignUp/>} />
    </Routes>
  )
}

export default AllRoutes



// api
// https://smiling-jade-fly.cyclic.app/