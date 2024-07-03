import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Carddemo from './components/Carddemo'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path='/n' element={<Carddemo/>}/>
    </Routes>

    </div>
  )
}

export default App
