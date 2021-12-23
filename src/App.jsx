import React from 'react'
import './app.scss'
import Home from './pages/home/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </Router>
  )
}

export default App
