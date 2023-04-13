import { Button, TextField, Alert, FormControlLabel, Checkbox } from "@mui/material"
import { Box, display } from "@mui/system"
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export const Register = () => {


  const navigate= useNavigate();

  const[error,setError]=useState(
    {
      status:false,
      message:"",
      type:""
    }
  )
 
   


const handleSubmit=(e)=>{
   e.preventDefault()
   const data= new FormData(e.currentTarget)

   const actualdata= {
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    cfp: data.get("cfp"),
    tc: data.get("tc")
    
   }
   if (actualdata.email&&actualdata.password&&actualdata.name&&actualdata.cfp&&actualdata.tc) {

    if (actualdata.password==actualdata.cfp) { document.getElementById("log-form").reset();
    setError({
      status:true,
      message:"Registration Successful",
      type:"success"
    })
    navigate('/')
      
    }
    else{
        
    setError({
      status:true,
      message:"Password and Confirm password must matched",
      type:"error"
    })
    }
   
   
   }
   else{
  
    setError({
      status:true,
      message:"All Field Required",
      type:"error"
    })
   }
}


  return (
    <div>
        <Box component="form" noValidate sx={{mt:2}} id="log-form" onSubmit={handleSubmit}>
        <TextField margin="normal" required fullWidth id="name" name="name" label="Name"/>
            <TextField margin="normal" required fullWidth id="email" name="email" label="Email Adress"/>
            <TextField margin="normal" required fullWidth id="password" name="password" label="Password"type="password"/>
            <TextField margin="normal" required fullWidth id="cfp" name="cfp" label="Confirm Password" type="password"/>
            <FormControlLabel control={<Checkbox value="agree"  id="tc" name="tc"/>} label="I agree with term and condition"/>
            <Box>
           <a href="/">term and condition</a>
            </Box>
            
            <Box textAlign="center">
            <Button sx={{mt:3,mb:2,px:5}} type="submit" variant="contained"  >Sign In</Button>
            </Box>
            {error.status?<Alert severity={error.type}>{error.message}</Alert>:""}
        </Box>
    </div>
  )
}
