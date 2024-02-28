import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Discover from "../../views/discover"
export default function discoverRouter() {
  return (
    <Routes>
        <Route path='/discover' element={<Discover></Discover>}></Route>
    </Routes >
  )
}
