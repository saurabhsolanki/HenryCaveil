import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify'
import './CSS/ContactFrom.css'


const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

const initial = {
    name:"",
    phone: "",
    city: "",
    date:dd + '-' + mm + '-' + yyyy
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
        if(data.name==="" || data.city==="" ){
          return alert("Please Fill all The field")
        }
        if(data.phone.length!==10 ){
          return alert("Your Phone Number Should be alteast of 10 Digit")
        }
        axios.post("http://localhost:8080/userData",data).then((res)=>{
            console.log(res.data.message)
            setData({name:"", city:"", phone:""})
            toast.success(`${res.data.message}`)
            alert(`${res.data.message}`)
              setTimeout(()=>{
                navigate("/")
            },2000)
                }).catch((err)=>{
                    console.log(err.response.data.error)
                    alert(`${err.response.data.message}`)
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
        <input type="text" placeholder='Enter Your Name' name='name' onChange={handleChange} required/>
        </div>


        <label htmlFor="">Phone Number</label>
        <div>
        <i className="fa-solid fa-mobile"></i>
        <input type="number" placeholder='Enter Mobile Number' name='phone' onChange={handleChange} required/>
        </div>


        <label htmlFor="">City</label>
        <div>
        <i class="fa-solid fa-location-dot"></i>
        <input type="text" placeholder='Enter Your City'  name='city' onChange={handleChange} required/>
        </div>

        <br />
        <button onClick={(e)=>handleSubmit(e)}>Submit Now</button>
      </form>
    </div>
  )
}

export default ContactForm
