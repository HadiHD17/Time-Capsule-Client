import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/Home" element={<HomePage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
    </Routes>
    
  )
}

export default MyRoutes