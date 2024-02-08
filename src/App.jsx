import React from 'react'
import Nav from './components/Nav'
import Createuser from './components/Createuser'
import Users from './components/Users'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edituser from './components/Edituser'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<Createuser/>} path="/"/>
        <Route element={<Users/>} path="/users"/>
        <Route element={<Edituser/>} path="/edituser/:id"/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
