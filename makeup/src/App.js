import React from 'react'
import {Route,Routes} from 'react-router-dom'
import{Box} from '@mui/material';

import Home from './Pages/Home';
import Products from './Pages/Products';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import './index.css'

function App() {
  return (
    <Box width="400px">
        <Navbar/>
        <Routes >
          <Route path="/"element={<Home />} />
          <Route path="/exercise/:id" element={<Products />} />
        </Routes>
        <Footer />
        </Box>
  )
}

export default App