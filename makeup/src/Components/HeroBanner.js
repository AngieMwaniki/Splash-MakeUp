import React from 'react'
import{Box, Stack, Typography} from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg: '212px',xs:'70px'},
        m1:{sm: '50px'} }}
         position="relative" p="20px">
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
        BLEND YOUR BEAUTY!
        </Typography>
        <Typography fontWeight="700"
        sx{{fontSize:}}>
            Beauty is about making yourself happy,<br/> Always be you, but better.
        </Typography>
        <Typography>
            Pamper yourself with the most effective makeup products.
        </Typography>

    </Box>
  )
}

export default HeroBanner