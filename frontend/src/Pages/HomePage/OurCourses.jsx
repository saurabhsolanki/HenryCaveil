import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import './CSS/OurCourses.css'


const info=[
    {
        heading:'Medical Coding Training',
        price:"70",
        detail:"In online medical coding training students have option to study anytime.",
        rating:'4.7(Rating)',
        learner:'1000 Learners',
        image:"https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/marketing-1024x619.jpg"
    },
    {
        heading:'Medical Transcription',
        price:"70",
        detail:"In online medical coding training students have option to study anytime.",
        rating:'4.7(Rating)',
        learner:'1000 Learners',
        image:"https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/business-1024x619.jpg"
    },
    {
        heading:'Medical Coding',
        price:"70",
        detail:"In online medical coding training students have option to study anytime.",
        rating:'4.7(Rating)',
        learner:'1000 Learners',
        image:"https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/development-1024x619.jpg"
    },
]

const OurCourses = () => {
    const [data,setData]=useState(info)
  return (
    <div id='mainDiv_allCourseDiv'>
      <h1 className='textBorder'><strong>Online Popular Courses</strong></h1>
      <div id="allCoursesDiv">
        {
            data?.map((e,i)=>(
                <div id='singleCourseDiv'>
{/* course image */}
                    <div id="courseImageDiv">
                        <img src={e.image} alt="" />
                    </div>

                    <div id="coursePriceAndDetailDiv">
                        <div id="coursePriceOneDiv">
                        <i class="fa-regular fa-clock"></i>
                        <>55 Weeks</>
                        {" "}
                        <>|</>
                        <><strong>${e.price}</strong></>
                        </div>
                        <div id="coursePriceTwoDiv">
                        <i class="fa-sharp fa-solid fa-book-bookmark"></i>
                        </div>
                    </div>

{/* button download */}
                    <div id="courseButtonDiv">
                        <Button>DOWNLOAD BROSCHE</Button>
                        <Button>APPLY NOW</Button>
                    </div>
                    

                    <hr class="hr" />

                    <div id="courseTitleDiv">
                        <h4>{e.heading}</h4>
                        <p>{e.detail}</p>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default OurCourses
