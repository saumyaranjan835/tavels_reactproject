import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import About from './Componets/Pages/About'
import Contact from './Componets/Pages/Contact'
import Home from './Componets/Pages/Home'
  import {Student} from './Componets/Layout.js'
import { Registration } from "./Componets/Pages/Registration"






const App = () => {
  return (
    <>

 <BrowserRouter>

 <Routes>
  <Route path="/" element={<Student/>}>
    <Route index element={<Home/>}/>
    
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/registration' element={<Registration/>}/>

  

  </Route>
  
  </Routes></BrowserRouter>
   
    
    
    </>
  )
}

export default App