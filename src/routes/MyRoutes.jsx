import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path ="Register" element={<RegisterPage/>}/>
    </Routes>
    
  )
}

export default MyRoutes