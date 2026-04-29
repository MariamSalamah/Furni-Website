import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import Button from '@mui/material/Button';



export default function WeHelpYouSection() {
  return (
     <>
        <Box sx={{color:'#eff2f1', py:16, px:4}}>
                            <Grid container spacing={8}>


                            <Grid size={6.5} sx={{ ml:12 ,position: 'relative'}}>
                              <Box component="img" src="src\assets\img-grid-1.jpg" sx={{width:"70%", borderRadius:8, display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',}}/> 
                               <Box component="img" src="src\assets\img-grid-2.jpg" sx={{width:"30%", borderRadius:8, position: 'absolute', 
                                          top: 0,
                                          zIndex: 1,
                                          right:-32}}/> 
                                <Box component="img" src="src\assets\img-grid-3.jpg" sx={{width:"52%",height:"80%", borderRadius:8, position: 'absolute', 
                                          bottom: -120,
                                          zIndex: 1,
                                          right:-32}}/>              
                              </Grid>




                              <Grid size={4.5} sx={{pl:2, ml:2}}>
                                  <Typography sx={{ color:'#2F2F2F', width:"90%", mb:2,fontWeight:'semi-bold'}} variant='h4'>We Help You Make Modern Interior Design</Typography>
                                  <Typography sx={{ color:'#7d7d7d', width:"80%", fontSize: 14 , mb:3}}>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</Typography>  

                              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'flex-start'}}>
                                 <FiberManualRecordOutlinedIcon sx={{fontSize:14,color:'#080808', p:0.5}}/>
                                  <Typography sx={{ color:'#7d7d7d', width:"100%", fontSize: 14 , mb:3}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</Typography>  
                                                        

                                </Box>

                                
                                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'flex-start'}}>
                                 <FiberManualRecordOutlinedIcon sx={{fontSize:14,color:'#080808', p:0.5}}/>
                                  <Typography sx={{ color:'#7d7d7d', width:"100%", fontSize: 14 , mb:3}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</Typography>  
                                                        

                                </Box>

                                 </Box>



                              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'flex-start'}}>
                                 <FiberManualRecordOutlinedIcon sx={{fontSize:14,color:'#080808', p:0.5}}/>
                                  <Typography sx={{ color:'#7d7d7d', width:"100%", fontSize: 14 , mb:3}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</Typography>  
                                                        

                                </Box>

                                
                                 <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'flex-start'}}>
                                 <FiberManualRecordOutlinedIcon sx={{fontSize:14,color:'#080808', p:0.5}}/>
                                  <Typography sx={{ color:'#7d7d7d', width:"100%", fontSize: 14 , mb:6}}>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</Typography>  
                                                        

                                </Box>

                                 </Box>


                                 <Button rounded variant="contained" sx={{backgroundColor:'#151515e7', color:'#f3f3f3', borderRadius: '30px',p:1.5, width:'120px'}}>Explore</Button>
                              
                              </Grid>


                                     

                  
                            </Grid>




                        {/* small chairs */}

                        <Grid container sx={{my:32,ml:12, gap:8}}>


                          <Grid size={3.6} sx={{ display: 'flex', justifyContent: 'center', alignItems:"center"}} >
                                    <Box sx={{ width:"38%",height:"72%", position: 'relative',
                                        backgroundColor:'#11a14f16', borderRadius:'20px',mr:2}}>
                                        <Box component="img" src="src\assets\Frame 1.png" sx={{width:"115%", position: 'absolute', 
                                          top: -20,
                                          zIndex: 1,}} />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"flex-start"}}>
                                         <Typography sx={{ color:'#2F2F2F', mt:2, fontSize:15,mb:.6}} variant='h6'>Nordic Chair</Typography> 
                                        <Typography sx={{ color:'#616161ff', fontSize:15,width:"79%",mb:.6,fontWeight:'normal'}} variant='h6'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</Typography> 
                                        <Typography sx={{ color:'#2F2F2F', fontSize:15,mb:.6,fontWeight:'normal', '&:hover':{cursor:'pointer', color:'#b8b8b8e8'}}} variant='h6'>Read More</Typography> 
                                    </Box>
                                   
                            </Grid> 

                             <Grid size={3.6} sx={{ display: 'flex', justifyContent: 'center', alignItems:"center"}} >
                                    <Box sx={{ width:"38%",height:"72%", position: 'relative',
                                        backgroundColor:'#11a14f16', borderRadius:'20px',mr:2}}>
                                        <Box component="img" src="src\assets\Frame 2.png" sx={{width:"115%", position: 'absolute', 
                                          top: -20,
                                          zIndex: 1,}} />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"flex-start"}}>
                                         <Typography sx={{ color:'#2F2F2F', mt:2, fontSize:15,mb:.6}} variant='h6'>Kruzo Aero Chair</Typography> 
                                        <Typography sx={{ color:'#616161ff', fontSize:15,width:"79%",mb:.6,fontWeight:'normal'}} variant='h6'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</Typography> 
                                        <Typography sx={{ color:'#2F2F2F', fontSize:15,mb:.6,fontWeight:'normal', '&:hover':{cursor:'pointer', color:'#b8b8b8e8'}}} variant='h6'>Read More</Typography> 
                                    </Box>
                                   
                            </Grid> 

                              <Grid size={3.6} sx={{ display: 'flex', justifyContent: 'center', alignItems:"center"}} >
                                    <Box sx={{ width:"38%",height:"72%", position: 'relative',
                                        backgroundColor:'#11a14f16', borderRadius:'20px',mr:2}}>
                                        <Box component="img" src="src\assets\Frame 3.png" sx={{width:"115%", position: 'absolute', 
                                          top: -20,
                                          zIndex: 1,}} />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:"flex-start"}}>
                                         <Typography sx={{ color:'#2F2F2F', mt:2, fontSize:15,mb:.6}} variant='h6'>Ergonomic Chair</Typography> 
                                        <Typography sx={{ color:'#616161ff', fontSize:15,width:"79%",mb:.6,fontWeight:'normal'}} variant='h6'>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</Typography> 
                                        <Typography sx={{ color:'#2F2F2F', fontSize:15,mb:.6,fontWeight:'normal', '&:hover':{cursor:'pointer', color:'#b8b8b8e8'}}} variant='h6'>Read More</Typography> 
                                    </Box>
                                   
                            </Grid> 


                        </Grid>



                </Box>
    </>
  )
}
