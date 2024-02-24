import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from '../../views/login';
import Subscribe from '../../views/Subscribe.js';
export default function AuthRouters() {
  return (
    <Routes>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/createAccount' element={<Subscribe />}></Route>
   </Routes>
  )
}
