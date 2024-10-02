import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Todolist from '../Pages/Todolist';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/todo' element={<Todolist/>}></Route>
    </Routes>
  )
}

export default AllRoutes
