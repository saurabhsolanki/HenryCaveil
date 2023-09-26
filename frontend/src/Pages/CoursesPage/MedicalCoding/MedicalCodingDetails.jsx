import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ListGroup from "react-bootstrap/ListGroup";
import "./CSS/MedicalCodingDetails.css";

const MedicalCodingDetails = () => {
  return (
    <div id="medicalCodingDetailsTabDiv">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Overview">
          <div className="MCDhomeTabDiv">
            <h1>Medical Coding Training</h1>

            <p>
            The Medical Coding training program is a professional course taught by experienced and highly classified faculty. It covers various aspects of medical coding and the medical fields like Medical terminologies, treatments, diagnosis, tools, treatments, tests, and other areas. 
            </p>

            <h5>What Will You Learn?</h5>
            <div id="MCDetailContentTextListDiv">
            <div className="textListDiv">
              <i class="fa-sharp fa-solid fa-circle-check"></i>
              <p> <b>Certified Institution:</b> An Institution with excellent testimonials and Certifications is a wiser choice.</p>
            </div>

            <div className="textListDiv">
              <i class="fa-sharp fa-solid fa-circle-check"></i>
              <p> <b>Quality Education:</b> They must offer one-to-one support, practical learning approaches, lessons, regular tests, and doubt support.</p>
            </div>

            <div className="textListDiv">
              <i class="fa-sharp fa-solid fa-circle-check"></i>
              <p> <b>Experienced Faculty:</b> Trained and qualified trainers and faculty guide the students and polish their overall skills as medical coders.</p>
            </div>
            <div className="textListDiv">
              <i class="fa-sharp fa-solid fa-circle-check"></i>
              <p> <b>High Placement Rate</b>: Recognised institutions ensure high placements and offer support and guidance from the beginning till the end of the program.</p>
            </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Curriculum">
          {/* <Sonnet /> */}
        </Tab>
        <Tab eventKey="contact" title="Requirements">
          <div className="MCDhomeTabDiv">
            <h5>Eligibility:-</h5>
            <p>
            Candidates must have completed Higher secondary (12th) and bachelor's degree, associate or certificate program in required fields

            </p>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default MedicalCodingDetails;
