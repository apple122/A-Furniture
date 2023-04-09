import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Page/Home/Index'

const Routers = () => {
  return (
    <div>
      <Routes>

        {/* <Route path='/*' element={<Context_Index />} /> */}
        <Route path='/home' element={<Home />} />

      </Routes>
    </div>
  )
}

export default Routers