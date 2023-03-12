import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import './CSS/WhatsApp.css'

const WhatsApp = () => {
  return (
    <div id='whatsapp_float'>
      <ReactWhatsapp  number="+91 9717464021" message="Hii I would like to Know more about it"  id='whatsapp_div'> 
     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt="whatsapp" width='40px' />
      <p>+91 9717464021</p>

      </ReactWhatsapp>
    </div>
  )
}

export default WhatsApp
