 import React, {useState} from 'react'
 import {Box} from '@mui/material'
 import HeroBanner from '../Components/HeroBanner'
 import SearchProducts from '../Components/SearchProducts'
 import Produce from '../Components/Produce'
 
 const Home =() => {
   return (
     <Box>
      <HeroBanner />
      <SearchProducts/>
      <Products/>
     </Box>
   )
 }
 
 export default Home