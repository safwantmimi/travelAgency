import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FooterComponent from "../../views/footer"
export default function footerRoute() {
 return (
    <Routes>
      <Route path="/footer" element={<FooterComponent></FooterComponent>}></Route>  
    </Routes>
  )
}
