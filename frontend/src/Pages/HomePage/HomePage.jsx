import React, { useEffect, useState } from 'react'
import './HomePage.css'
import Typewriter from 'typewriter-effect';

const HomePage = () => {
    const [state]=useState({
        title:"Hi,",
        titleTwo:"I' m",
        titleThree:"Code & Coding"
    })
  return (
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
            <div className="button">Contact Me!</div>
        </div>
      </div>

      {/* <div className="home-image">
        <img src="https://images.pexels.com/photos/5149754/pexels-photo-5149754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt="doctor" className='spiderman-image'/>
      </div> */}
    </div>
  )
}

export default HomePage
