import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function WhyChooseUsSection() {
  return (
    <>
        <Box sx={{color:'#EFF2F1', py:16, px:4}}>
                              <Grid container>
                                                                  
                              <Grid size={6} sx={{ ml:12}}>
                                  <Typography sx={{ color:'#2F2F2F', width:"90%", mb:4}} variant='h4'>Crafted with excellent material.</Typography>
                                  <Typography sx={{ color:'#7d7d7d', width:"100%", fontSize: 14 , mb:6}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                                    <Button rounded variant="contained" sx={{backgroundColor:'#151515e7', color:'#f3f3f3', borderRadius: '20px'}}>Explore</Button>
         
                              </Grid>


                                     
                              <Grid size={5}>
                              <Box component="img" src="src\assets\why-choose-us-img.jpg" sx={{width:"100%"}}/>              
                              </Grid>
                  
                              </Grid>
                </Box>
    </>
  )
}
