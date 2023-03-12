import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllUserList from '../Pages/AllUserPage/AllUserData'
import ContactPage from '../Pages/ContactPage/ContactPage'
import HomePage from '../Pages/HomePage/HomePage'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='adminPage' element={<AllUserList/>}/>
        <Route path='contactPage' element={<ContactPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoute
