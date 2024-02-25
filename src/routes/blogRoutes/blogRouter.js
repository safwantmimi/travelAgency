import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Blog from '../../views/blog.js';
export default function blogRouter() {
  return (
    <Routes>
    <Route path='/blog' element={<Blog />}></Route>
   </Routes>
  )
}
