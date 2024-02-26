import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Testimony from "../../views/testimonials"
export default function testimonails() {
  return (
    <Routes>
      <Route path="/testimonials" element={<Testimony />}></Route>
    </Routes>
  )
}
