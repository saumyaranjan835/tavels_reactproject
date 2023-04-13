import { Button, Card, Grid, Tab, Tabs, TextField } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react";
import { Register } from "../auth/Register";
import { User } from "../auth/User";
import Pic1 from '../../Images/shoping.png'

const Tabpanel=(props)=>{
const {children,value,index}= props;
return(
  <div role="tabpanel" hidden={value !==index}>
    {
      value==index&&(
        <Box>{children}</Box>
      )
    }

  </div>
)

}

export const Registration = () => {

  const [value,setvalue]= useState(0)
 const handleChange=(event,newvalue)=>{
    setvalue(newvalue);
  }

  
  return (
  <>
  <Grid container >
    <Grid item lg={7} sm={5} sx={{
      backgroundImage: `url(${Pic1})`,
      backgroundSize:'cover',
      backgroundPosition:'centre'
    }} >
     

    </Grid>
    <Grid item  lg={5} sm={7} xs={12}>
      <Card sx={{width:'100%',height:'100%'}}>
        <Box>
          <Tabs value={value} textColor="secondary" indicatorColor="secondary"onChange={handleChange}>
            <Tab  sx={{fontWeight:"bold" , textTransform:"none"}} label="User" />
            <Tab  sx={{fontWeight:"bold", textTransform:"none"}}label="Registration"/>
          </Tabs>
          <Tabpanel value={value} index={0}><User/></Tabpanel>
          <Tabpanel value={value} index={1}><Register/></Tabpanel>
        </Box>
      </Card>

</Grid>
  </Grid>
  </>
  )
}