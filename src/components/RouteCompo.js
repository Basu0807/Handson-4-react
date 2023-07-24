import React from 'react'
import Student from './Student'
import Contact from './Contact'
import Home from './Home';
import { Route, Routes } from "react-router-dom";
import AddData from './AddData';

const RouteCompo = () => {
  return (
    <>
        <Routes>
            <Route path ='/' element ={<Home/>}/>
            <Route path ='/student' element ={<Student/>}/>
            <Route path ='/contact' element ={<Contact/>}/>
            <Route path='/student/AddData' element={<AddData/>}/>
       </Routes>
    </>
  )
}

export default RouteCompo