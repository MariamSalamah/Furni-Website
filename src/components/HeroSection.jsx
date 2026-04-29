import Navbar from './Navbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


export default function HeroSection() {
  return (
    <>
        <Navbar />
         <Box sx={{bgcolor:'#3b5d50', color:'#dbdbdb',p:4}}> 

            <Grid container>

            <Grid size={5} sx={{ p:4, ml:10}}>
                <Typography sx={{ color:'white', width:"70%", mb:2}} variant='h3'><strong>Modern Interior Design Studio</strong></Typography>
                <Typography sx={{ color:'#c7c7c78e', width:"75%", fontSize: 14 , mb:2}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                <Box sx={{display: 'flex', gap: 1}}>
                     <Button rounded variant="contained" sx={{backgroundColor:'#f8b810', color:'#151515e7', borderRadius: '20px'}}>Shop Now</Button>
                     <Button rounded variant="outlined" sx={{borderColor:'#bcbcbca5', color:'#ffffff', borderRadius: '20px' }}>Explore</Button>
                </Box>
            </Grid>

            <Grid size={6} sx={{ p:4}}>
            <Box component="img" src="src\assets\3.png" sx={{width:"100%"}}/>
            </Grid>


            </Grid>

         </Box>

    </>
  )
}
