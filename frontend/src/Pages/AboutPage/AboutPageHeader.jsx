import React from "react";
import './CSS/AboutPageHeader.css'

const AboutPageHeader = () => {
  return (
    <div>
      <div id="mainAboutPageHeaderDiv">
        <div id="aboutPageHeaderDiv">
          <div className="aboutPageHeaderDivContent">
            <h1>Why Choose Us?</h1>
          </div>

          <div className="aboutPageHeaderDivContent">
            <img
              src="https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2022/12/breadcrumb-feature-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageHeader;
