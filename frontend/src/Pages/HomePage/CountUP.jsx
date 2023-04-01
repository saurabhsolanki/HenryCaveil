import React from 'react'
import CountUp from 'react-countup';
import './CSS/CountUp.css'


const countData=[
    {
        num:100,
        text:"Active Students",
        image:"https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/44.png"
    },
    {
        num:200,
        text:"Reviews with 4.5/5 rating",
        image:"https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/22.png"
    },
    {
        num:230,
        text:"Live Classes Every Month",
        image:"https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/22.png"
    },
    {
        num:323,
        text:"Corporate Partners",
        image:"https://rstheme.com/products/wordpress/ecenter/wp-content/uploads/2023/01/33.png"
    },
]

const CountUP = () => {
  return (
    <div id="mainCountDiv">

        <div id='countUpDiv'>
        {
            countData.map((e)=>(
                <div id='singleCountUPDiv'>
                    <img src={e.image} alt="" />
                <div>
                <CountUp className='CountNumber' start={0} end={e.num} delay={0} /><strong>{" +"}</strong>
                </div>
                    <p>{e.text}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default CountUP
