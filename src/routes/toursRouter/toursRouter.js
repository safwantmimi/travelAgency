import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Tours from '../../views/tours.js';
export default function ToursRouter() {
  return (
    <Routes>
    <Route path='/availableTours' element={<Tours />}></Route>
   </Routes>
  )
}
