import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material"
import { NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
   <>
   <Box sx={{flexGrow:1}}>
    <AppBar position="static" color="secondary">
        <Toolbar>
            <Typography variant="h5" component="div" sx={{flexGrow:1}}>
                Ganishop
             </Typography>
            <Button component={NavLink} to="/" style={({isActive})=>{return{backgroundColor: isActive?"#6d1b7b":""}}}
            sx={{color:'white'}}>Home</Button>
                <Button component={NavLink} to="/contact"style={({isActive})=>{return{backgroundColor: isActive?"#6d1b7b":""}}} sx={{color:'white'}}>Contact</Button>
            <Button component={NavLink} to="/about"style={({isActive})=>{return{backgroundColor: isActive?"#6d1b7b":""}}} sx={{color:'white'}}>About</Button>
            <Button component={NavLink} to="/registration"style={({isActive})=>{return{backgroundColor: isActive?"#6d1b7b":""}}} sx={{color:'white'}}>Registration</Button>
        </Toolbar>
    </AppBar>
   </Box>

  
   </>
  )
};
