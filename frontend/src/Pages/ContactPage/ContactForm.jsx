import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './CSS/ContactFrom.css'


const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const initial = {
    name:"",
    phone: "",
    city: "",
    date:mm + '-' + dd + '-' + yyyy
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
        console.log(data)
        axios.post("http://localhost:8080/userData",data).then((res)=>{
            console.log(res.data.message)
            setData({name:"", city:"", phone:""})
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

        <h3>Please Fill the Form</h3>
        <br />

        <label htmlFor="">Name</label>
        <div>
        <i className="fa-solid fa-user"></i>
        <input type="text" placeholder='Enter Your Name' name='name' onChange={handleChange} />
        </div>


        <label htmlFor="">Phone Number</label>
        <div>
        <i className="fa-solid fa-mobile"></i>
        <input type="text" placeholder='Enter Mobile Number' name='phone' onChange={handleChange} />
        </div>


        <label htmlFor="">City</label>
        <div>
        <i className="fa-solid fa-envelope"></i>
        <input type="text" placeholder='Enter Your City'  name='city' onChange={handleChange} />
        </div>

        <br />
        <button onClick={(e)=>handleSubmit(e)}>Submit Now</button>
      </form>
    </div>
  )
}

export default ContactForm
