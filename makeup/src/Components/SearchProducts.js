import { Typography } from '@mui/material'
import { Stack } from '@mui/system';
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
       <TextField height="76px"
       value=""
       onChange={(e)=> {}}
       />
    </Box>

    </Stack>
  )
}

export default SearchProducts