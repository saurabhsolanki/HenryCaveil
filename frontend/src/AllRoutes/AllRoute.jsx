import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllUserList from '../Pages/AllUserPage/AllUserData'
import ContactPage from '../Pages/ContactPage/ContactPage'
import HomePage from '../Pages/HomePage/HomePage'
import BlogPage from '../Pages/BlogPage/BlogPage'
import AboutPage from '../Pages/AboutPage/AboutPage'
import LoginPage from '../Pages/AuthPage/LoginPage'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='adminPage' element={<AllUserList/>}/>
        <Route path='contactPage' element={<ContactPage/>}/>
        <Route path='blogPage' element={<BlogPage/>}/>
        <Route path='aboutPage' element={<AboutPage/>}/>
        <Route path='loginPage' element={<LoginPage/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoute
