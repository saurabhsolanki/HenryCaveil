import React from 'react'
import MedicalTranscriptionDetails from './MedicalTranscriptionDetails'
import ContactForm from '../../ContactPage/ContactForm'
import MedicalTranscriptionHeader from './MedicalTranscriptionHeader'

const MedicalTranscription = () => {
  return (
    <div id='mainMedicalCodingDiv'>
      <MedicalTranscriptionHeader/>
      <div id="MedicalCodingHeaderDivContent">
        <MedicalTranscriptionDetails/>
        <ContactForm/>
      </div>
    </div>
  )
}

export default MedicalTranscription
