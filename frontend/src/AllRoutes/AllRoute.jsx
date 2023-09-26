import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllUserList from '../Pages/AllUserPage/AllUserData'
import ContactPage from '../Pages/ContactPage/ContactPage'
import HomePage from '../Pages/HomePage/HomePage'
import BlogPage from '../Pages/BlogPage/BlogPage'
import AboutPage from '../Pages/AboutPage/AboutPage'
import LoginPage from '../Pages/AuthPage/LoginPage'
import MedicalCoding from '../Pages/CoursesPage/MedicalCoding/MedicalCoding'
import MedicalTranscription from '../Pages/CoursesPage/MedicalTranscription/MedicalTranscription'
import PrivateRoute from './PrivateRoute'

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        
        <Route path='/adminPage' element={
          <PrivateRoute>
            <AllUserList/>
          </PrivateRoute>
        }/>
        <Route path='/contactPage' element={<ContactPage/>}/>
        <Route path='/blogPage' element={<BlogPage/>}/>
        <Route path='/aboutPage' element={<AboutPage/>}/>
        <Route path='/loginPage' element={<LoginPage/>}/>
        <Route path='/medicalCoding' element={<MedicalCoding/>}/>
        <Route path='/medicalTranscription' element={<MedicalTranscription/>}/>
        
      </Routes>
    </div>
  )
}

export default AllRoute
