import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import useGetCurentUser from './hooks/useGetCurentUser'
import { useSelector } from 'react-redux'
import Dashboard from './pages/Dashboard'
import Generate from './pages/Generate'

export const serverUrl = "http://localhost:8000"

const App = () => {
  useGetCurentUser()
  const {userData} = useSelector(state=>state.user)
  return (
    <div>

      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/dashboard' element={userData?<Dashboard/>:<Home/>} />
        <Route  path='/generate' element={userData?<Generate/>:<Home/>} />

      </Routes>
    </div>
  )
}

export default App