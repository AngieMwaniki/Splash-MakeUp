import { Typography } from '@mui/material'
import { borderRadius, Stack } from '@mui/system';
import React from 'react'
import {Box, Button, TextField} from '@mui/material';

const SearchProducts = () => {
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
       value=""
       onChange={(e)=> {}}
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
    position:"center"}}>
Search
</Button>

    </Stack>
  )
}

export default SearchProducts