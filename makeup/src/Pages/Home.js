 import React, {useState} from 'react'
 import {Box} from '@mui/material'
 import HeroBanner from '../Components/HeroBanner'
 import SearchProducts from '../Components/SearchProducts'
 import Product from '../Components/Product'
 
 const Home =() => {
   return (
     <Box>
      <HeroBanner />
      <SearchProducts/>
      <Product 
      products={products}
      setProducts={setProducts}
      
      />
     </Box>
   )
 }
 
 export default Home