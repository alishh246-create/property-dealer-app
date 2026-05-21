import React, { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PropertyDetail from './pages/PropertyDetail'
import Properties from './pages/Properties'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddProperty from './pages/AddProperty'

function App() {
  return (
          <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/property/:id' element={<PropertyDetail />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/add-property' element={<AddProperty/>}/>
          </Routes>
        <Footer />
      </HashRouter>
  )
}

export default App