import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Countries from '../../views/countries.js';
export default function countriesRouter() {
  return (
    <Routes>
    <Route path='/countries' element={<Countries />}></Route>
   </Routes>
  )
}
