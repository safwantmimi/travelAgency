import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingComponent from '../../components/landingComponent' 
export default function NavbarRouter() {
  return (
    <Routes>
    <Route path='/navbar' element={<LandingComponent />}></Route>
   </Routes>
  )
}
