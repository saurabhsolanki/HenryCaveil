import React from 'react'
import './CSS/WhyReason.css'

const WhyReason = () => {
    const data=[
        {
            i:"fa-regular fa-circle-user",
            text:"Certified & Experienced Instructors"
        },
        {
            i:"fa-solid fa-phone-volume",
            text:"Gold Membership & Post Training Followups"
        },
        {
            i:"fa-solid fa-star",
            text:"Tailor Made Training"
        },
        {
            i:"fa-solid fa-calendar-check",
            text:"Flexible Schedule"
        },
        {
            i:"fa-solid fa-video",
            text:"Access to the Recorded Sessions"
        },
        {
            i:"fa-regular fa-clock",
            text:"9 in 1 Program"
        },
    ]
  return (
    <div id='whyandreason'>
      <h2>Why Henry Harvin?</h2>
        <div id="reasonDiv">
        {
            data.map((e)=>(
                <div>
                    <i class={e.i}></i>
                    <p>{e.text}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default WhyReason
