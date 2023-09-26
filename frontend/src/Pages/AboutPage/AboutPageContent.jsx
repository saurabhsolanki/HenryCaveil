import React from "react";
import './CSS/AboutPageContent.css'
import { useNavigate } from "react-router-dom";

const AboutPageContent = () => {
  const navigate = useNavigate();

  const handleNavigate=()=>{
    navigate('/medicalCoding')
  }
  return (
    <div>
      <div id="aboutPageContentDiv">
        <div id="aboutPageContentImageDiv">
          <img
            src="https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2022/12/about-us-woman.png"
            alt=""
          />
        </div>

        <div id="aboutPageContentTextDiv">
          <h1>The India’s Largest Online Courses Ready</h1>
          <p>
          The competition in the Healthcare sector and rising demands for CodingWallah dedicates to providing the best facilities to students in terms of education, time, study materials, and high placements. 
          </p>

          <div id="aboutPageContentTextListDiv">
              {/* <h6>Here is how our Medical Coding and Medical Transcription Courses stand out from the rest:</h6> */}
            <div className="textListDiv">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <p> <strong>Placement Guarantee: </strong> 100% Placement guaranteed post-completion of the program.</p>
            </div>

            <div className="textListDiv">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <p> <strong>Internship Opportunities:</strong> Internship Assistance and Guidance is available for students during and after the program.</p>
            </div>

            <div className="textListDiv">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <p> <strong>Unlimited Doubts Support:</strong> The faculty provides unlimited doubt sessions, personalized guidance, and assistance to match the students’ pace. </p>
            </div>

          </div>

          <button id="aboutPageContentButton" onClick={handleNavigate}>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
