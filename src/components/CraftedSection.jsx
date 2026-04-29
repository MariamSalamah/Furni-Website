import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export default function CraftedSection() {
  return (
    <>
        <Box sx={{color:'#EFF2F1', py:16, px:4}}>
                      <Grid container>
          
                      <Grid size={3} sx={{ ml:12}}>
                          <Typography sx={{ color:'#2F2F2F', width:"90%", mb:4}} variant='h4'>Crafted with excellent material.</Typography>
                          <Typography sx={{ color:'#7d7d7d', width:"100%", fontSize: 14 , mb:6}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</Typography>
                            <Button rounded variant="contained" sx={{backgroundColor:'#151515e7', color:'#f3f3f3', borderRadius: '20px'}}>Explore</Button>
 
                      </Grid>
          
                      <Grid size={2.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"center", '&:hover': {
                        backgroundColor:'#11a14f16',
                                              cursor: "pointer"
                                       },}}>
                      <Box component="img" src="src\assets\Frame 1.png" sx={{width:"100%"}}/>
                      <Typography sx={{ color:'#2F2F2F', mt:2}} variant='h6'>Nordic Chair</Typography>   
                      <Typography sx={{ color:'#2F2F2F'}} variant='h6'><strong>$50.00</strong></Typography>               
                      </Grid>

                      <Grid size={2.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"center", '&:hover': {
                        backgroundColor:'#11a14f16',
                                              cursor: "pointer"
                                       },}} >
                      <Box component="img" src="src\assets\Frame 2.png" sx={{width:"100%"}}/>
                      <Typography sx={{ color:'#2F2F2F', mt:2}} variant='h6'>Kruzo Aero Chair</Typography> 
                      <Typography sx={{ color:'#2F2F2F'}} variant='h6'><strong>$78.00</strong></Typography> 
                      </Grid>

                      <Grid size={2.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"center" , '&:hover': {
                        backgroundColor:'#11a14f16',
                                              cursor: "pointer"
                                       },}}>
                      <Box component="img" src="src\assets\Frame 3.png" sx={{width:"100%"}}/>
                      <Typography sx={{ color:'#2F2F2F', mt:2}} variant='h6'>Ergonomic Chair</Typography> 
                      <Typography sx={{ color:'#2F2F2F'}} variant='h6'><strong>$43.00</strong></Typography> 
                      
                      </Grid>
          
          
                      </Grid>
        </Box>
    </>
  )
}
