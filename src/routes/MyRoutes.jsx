import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import DashboardPage from '../pages/DashboardPage'
import PublicWallPage from '../pages/PublicWallPage'


const MyRoutes = () => {
  return (
    <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path ="/Register" element={<RegisterPage/>}/>
        <Route path="/Dashboard" element={<DashboardPage/>}/>
        <Route path ="/Public" element={<PublicWallPage/>}/>
    </Routes>
    
  )
}

export default MyRoutes