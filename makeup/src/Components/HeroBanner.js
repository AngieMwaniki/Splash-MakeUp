import React from 'react'
import{Box, Stack, Typography ,Button} from '@mui/material';
import banner from '../assets/images/banner.jpg'
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
        <Typography fontWeight={700}
        sx={{fontsize:{lg:'44px',xs:'40px'}}}>
            Pamper, smile <br/> Always be you, but better.
        </Typography>
        <Typography fontSize="12px" lineHeight="35px" margin="20px">
            Pamper yourself with the most effective makeup products.
        </Typography>
    <Button  variant="contained" color="error" href="#exercises"  >Explore Products</Button>
    <img src ={banner} alt="bannere" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner