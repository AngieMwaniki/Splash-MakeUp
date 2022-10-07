import {Stack,Typography } from '@mui/material'
import React, {useEffect, useState} from 'react';
import {Box, Button, TextField} from '@mui/material';
import {productsOptions,fetchData} from '../utilities/fetchData';


const SearchProducts = () => {
 const [search, setSearch] = useState('')

 const handleSearch = async() => {
    if (search) {
        const productsData = await fetchData
        ('https://sephora.p.rapidapi.com/auto-complete', productsOptions);
        console.log(productsData)
    }
 }
    return (
    <Stack alignItems='center' mt="37px"
    justifyContent="center" p="20px">
        <Typography fontWeight={700} textAlign="center">
            Awesome Products You <br/> should know
        </Typography>
    <Box position="relative"  mb="72px" >
       <TextField 
       sx={{input:{
        fontWeight: '700',
       border:'none',
       borderRadius: '4px'},
       width: {lg: '1170px', xs:'350px'},
       backgroundcolor:'#FFF',
    borderRadius: '40PX'
    }}
       height="76px"
       value={search}
       onChange={(e)=>  setSearch (e.target.value.toLowerCase())}
       placeholder="Search Products" type="text"
       />
    </Box>
<Button cClassName="search-btn"
sx={{
    bgcolor:'#ff2625',
    color:'#fff',
    textTransform:'none',
    width:{lg:'175px', xs: '80px'},
    fontSize:{lg:'20px', xs:'14px'},
    height: '56px',
    position:"center"}}
    onClick={handleSearch}>

Search
</Button>

    </Stack>
  )
}

export default SearchProducts