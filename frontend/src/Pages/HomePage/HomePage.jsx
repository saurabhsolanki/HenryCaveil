import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Typewriter from 'typewriter-effect';
import CountUP from './CountUP';
import WhyReason from './WhyReason';
import OurCourses from './OurCourses';

const HomePage = () => {
    const [state]=useState({
        title:"Learn New",
        titleTwo:"Language For Free,",
        titleThree:"Bulid Your Skill"
    })
  return (
    <div>
    
    <div className='home'>
      <div className="home-intro">
        <h1>
            <div className="title">{state.title}</div>
            <div className="titleTwo">{state.titleTwo}</div>
            <div className="titleThree">{state.titleThree}</div>
        </h1>

        <div className="text">
            <Typewriter
            options={{
                autoStart:true,
                loop:true,
                delay:40,
                strings:[
                    "I'm a Medical Coder.",
                    "I'm a Doctor",
                    "I'm a Enthusiast"
                ]
            }}
            />
        </div>

        <div className="contact-me">
            {/* <div className="button"><i class="fa-regular fa-circle-play"></i></div> */}
            <i class="fa-solid fa-play"></i>
        </div>
      </div>

      <div className="home-image">
        {/* <img src="https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/abstrac-man-draw.png"  alt="doctor" className='spiderman-image'/> */}
        <img src="https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2022/12/h-10-banner-img.png"  alt="doctor" className='spiderman-image'/>
      </div>
    </div>


      <WhyReason/>

      <OurCourses/>
      <CountUP/>
    </div>
  )
}

export default HomePage
