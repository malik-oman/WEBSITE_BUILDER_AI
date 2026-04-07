import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import useGetCurentUser from './hooks/useGetCurentUser'

export const serverUrl = "http://localhost:8000"

const App = () => {
  useGetCurentUser()
  return (
    <div>

      <Routes>
        <Route  path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App