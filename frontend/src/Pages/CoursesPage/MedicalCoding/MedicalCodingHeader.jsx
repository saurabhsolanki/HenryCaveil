import React from "react";
import './CSS/MedicalCodingHeader.css'

const MedicalCodingHeader = () => {
  return (
    <div>
      <div id="mainMedicalCodingHeaderDiv">
        <div id="MedicalCodingHeaderDiv">
          <div className="MedicalCodingHeaderDivContent">
            <h1>Medical Coding</h1>
          </div>

          <div className="MedicalCodingHeaderDivContent">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4762/4762311.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCodingHeader;
