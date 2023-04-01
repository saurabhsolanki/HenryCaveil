import React from "react";
import './CSS/AboutPageContent.css'

const AboutPageContent = () => {
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
          <h1>The World’s Largest Online Courses Ready</h1>
          <p>
            Nam aliquam sem et tortor. Blandit massa enim nec dui nunc matt enim
            faucibus us interdum posuere lorem. Ipsum dolor sit amet dolor sit
            amet consectetur adipiscing elit ut. Sed euismod nisi porta.
          </p>

          <div id="aboutPageContentTextListDiv">

            <div className="textListDiv">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <p>Get a learning solution that’s tailored to your needs</p>
            </div>

            <div className="textListDiv">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <p>Get a learning solution that’s tailored to your needs</p>
            </div>

            <div className="textListDiv">
                <i class="fa-sharp fa-solid fa-circle-check"></i>
                <p>Get a learning solution that’s tailored to your needs</p>
            </div>

          </div>

          <button id="aboutPageContentButton">Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
