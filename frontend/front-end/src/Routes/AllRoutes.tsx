import React from 'react'
import {Routes, Route} from "react-router-dom"
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
    {/* USER'S ROUTES */}
    <Route path='/' element={<Home/>} />
    <Route path='/UserSignUp' element={<UserSignUp/>} />
    <Route path='/UserLogin' element={<UserLogin/>} />
    <Route path='/ProductsPage' element={<ProductsPage/>} />
    <Route path='/SingleProductPage/:id' element={<SingleProductPage/>} />
    {/* private routes below */}
    <Route path='/CartPage' element={<Cart/>} />
    <Route path='/WishListPage' element={<WishList/>} />

    {/* ADMIN'S ROUTES */}
    <Route path='/AdminLogin' element={<AdminLogin/>} />
    {/* private routes below */}
    <Route path='/AdminDashboard' element={<AdminDashboard/>} />

    {/* MERCHANT'S ROUTES */}
    <Route path='/MerchantSignUp' element={<MerchantSignUp/>} />
    <Route path='/MerchantLogin' element={<MerchantLogin/>} />
    {/* private routes below */}
    <Route path='/MerchantDashboard' element={<MerchantDashboard/>} />
   </Routes>
  )
}

export default AllRoutes