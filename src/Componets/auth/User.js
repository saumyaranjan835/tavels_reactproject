import { Alert, Button, TextField } from "@mui/material"

import { Box } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";


export const User = () => {

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
    email: data.get("email"),
    password: data.get("password")
   }
   if (actualdata.email&&actualdata.password) {
   
    document.getElementById("logid").reset();
    setError({
      status:true,
      message:"Login Successful",
      type:"success"
    })
    navigate('/')
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
        <Box component="form" noValidate id="logid" sx={{mt:2}} onSubmit={handleSubmit} >
          <TextField margin="normal" required fullWidth name="email" label="Email Adress" sx={{mt:1,mb:1 }}/>
          <TextField margin="normal" required fullWidth name="password" label="Password" sx={{mt:1,mb:1 }}type="password"/>
          <Box textAlign="center">
            <Button sx={{mt:3,mb:2,px:5}} type="submit" variant="contained">Login</Button>
          </Box>
          <NavLink to="/">Forgot Password?</NavLink>
          {error.status?<Alert severity={error.type}>{error.message}</Alert>:""}
          
          
        </Box>
    </div>
  )
}
