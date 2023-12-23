import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Agents from '../components/agents/Agents'
import Maps from '../components/maps/Maps'
import Weapons from '../components/weapons/Weapons'

const MainRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/agents' element={<Agents/>} />
        <Route path='/maps' element={<Maps/>} />
        <Route path='/weapons' element={<Weapons/>} />
    </Routes>
  )
}

export default MainRouter