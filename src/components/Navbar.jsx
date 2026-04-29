import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


export default function Navbar() {
  return (
    <>

        {/* <Box display="flex" justifyContent="center" alignItems="center" sx={{ p: 2,  gap: 2, bgcolor:'#3b5d50', color:'white'} }> */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems:"center", bgcolor:'#3b5d50', color:'#dbdbdb', py:4, px:18  }}>
        <Typography variant="h4"  align="center"  sx={{color:'white', '&:hover': {
                        cursor: "pointer"
                 },}}><strong>Furni<FiberManualRecordIcon sx={{fontSize:8,color:'#c8c8c8c4'}}/></strong></Typography>

             <Box sx={{ display: 'flex', gap: 6, justifyContent: 'space-evenly' }}>

             <Typography sx={{ '&:hover': {
                          borderBottom: '5px solid yellow',
                          color:'white',
                        cursor: "pointer"
                 },}}>Home</Typography>

                 <Typography sx={{ '&:hover': {
                          borderBottom: '5px solid yellow',
                          color:'white',
                        cursor: "pointer"
                 },}}>Shop</Typography>

                   <Typography sx={{ '&:hover': {
                          borderBottom: '5px solid yellow',
                          color:'white',
                        cursor: "pointer"
                 },}}>About Us</Typography>

                   <Typography sx={{ '&:hover': {
                          borderBottom: '5px solid yellow',
                          color:'white',
                        cursor: "pointer"
                 },}}>Services</Typography>
          
                  <Typography sx={{ '&:hover': {
                          borderBottom: '5px solid yellow',
                          color:'white',
                        cursor: "pointer"
                 },}}>Blog</Typography>

                  <Typography sx={{ '&:hover': {
                          borderBottom: '5px solid yellow',
                          color:'white',
                        cursor: "pointer"
                 },}}>Contact Us</Typography>
         

              <Box sx={{ display: 'flex', gap: 2 }}>
                <PermIdentityIcon sx={{color:'white', '&:hover':{ 
                        cursor: "pointer"}}}/>
                <ShoppingCartOutlinedIcon  sx={{ color:'white','&:hover':{ 
                        cursor: "pointer"}}}/>
            </Box> 
             </Box>

          
           


      </Box>

    </>
  )
}
