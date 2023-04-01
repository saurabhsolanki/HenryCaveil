import React from 'react'
import './CSS/ContactPageHeader.css'

const ContactPageHeader = () => {
  return (
    <div>
      <div id="contactHeaderUpperDiv">
        <h1>Contact Us</h1>
      </div>

      <div id="contactHeaderMiddle">
        <div className="contactPageDetailDiv">
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <p><strong>Address</strong></p>
            <p>Gali No.1, Dabri Village, New Delhi</p>
        </div>

        <div className="contactPageDetailDiv">
        <i class="fa-sharp fa-solid fa-phone"></i>
            <p><strong>Phone Number</strong></p>
            <p>+91-9717464021</p>
        </div>

        <div className="contactPageDetailDiv">
        <i class="fa-solid fa-envelope"></i>
            <p><strong>Web Address</strong></p>
            <p>Email: info@odysseymt.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPageHeader
