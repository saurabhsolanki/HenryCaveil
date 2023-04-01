import React from "react";
import ContactForm from "./ContactForm";
import ContactPageHeader from "./ContactPageHeader";
import './CSS/ContactPage.css'

const ContactPage = () => {
  return (
    <div id="mainContactPagediv">
      <ContactPageHeader />

      <div id="contactPageFormAndMap">
          <img
            src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?w=996&t=st=1680262371~exp=1680262971~hmac=66f7263a830eb40c1b31f52ac80c7e1c7204fe7e6a4c659d3d2534dc0243be4c"
            alt=""
          />

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
