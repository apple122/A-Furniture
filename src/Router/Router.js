import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Users/Home/Index'
import Admin from '../Page/Admin/Index'
import Dashboard from '../Page/Admin/Dashboard/Dashboard'
import Product_type from '../Page/Admin/Product-type/Product.type'
import Product_Items from '../Page/Admin/Product-Items/Product.Items'
import Users from '../Page/Admin/Users/Users'

const Routers = () => {
  return (
    <div>
      <Routes>

        <Route path='/*' element={<Home />} />

        <Route path='/Admin' element={<Admin />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Product-type' element={<Product_type />} />
        {/* Produuct items */}
        <Route path='/Product-Items' element={<Product_Items />} />
        
        {/* Users  */}
        <Route path='/Users' element={<Users />} />

        <Route path='/Home' element={<Home />} />

      </Routes>
    </div>
  )
}

export default Routers