import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './CSS/ContactFrom.css'


const initial = {
    name:"",
    email: "",
    phone: "",
  };

const ContactForm = () => {
    const [data, setData] = useState(initial);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/userData",data).then((res)=>{
            console.log(res.data.message)
            setData({name:"", email:"", phone:""})
            //   setTimeout(()=>{
            //     navigate("/login")
            // },1000)
                }).catch((err)=>{
                    console.log(err.response.data)
                })
      }


  return (
   <div id='loginDiv'>

      <form action="">

        <p >Login</p>
        <br />

        <label htmlFor="">Name</label>
        <div>
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder='Enter Your Name' name='name' onChange={handleChange} />
        </div>

        <label htmlFor="">Email</label>
        <div>
        <i className="fa-solid fa-envelope"></i>
        <input type="text" placeholder='Enter Your Email'  name='email' onChange={handleChange} />
        </div>
        <label htmlFor="">Phone Number</label>
        <div>
        <i className="fa-solid fa-mobile"></i>
        <input type="text" placeholder='Enter Your Mobile Number' name='phone' onChange={handleChange} />
        </div>
        <br />
        <button onClick={(e)=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
