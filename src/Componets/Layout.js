import { CssBaseline } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"


export const Student = () => {
  return (
 <>
 <CssBaseline/>
 <Navbar/>
<Outlet/>

 </>
  )
}

