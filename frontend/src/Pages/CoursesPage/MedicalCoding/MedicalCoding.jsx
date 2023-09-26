import React from 'react'
import MedicalCodingHeader from './MedicalCodingHeader'
import MedicalCodingDetails from './MedicalCodingDetails'
import ContactForm from '../../ContactPage/ContactForm'
import './CSS/MedicalCoding.css'

const MedicalCoding = () => {
  return (
    <div id='mainMedicalCodingDiv'>
      <MedicalCodingHeader/>
      <div id="MedicalCodingHeaderDivContent">
        <MedicalCodingDetails/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default MedicalCoding
