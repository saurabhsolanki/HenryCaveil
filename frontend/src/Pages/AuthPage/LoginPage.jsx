import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from "axios";
import "./CSS/Login.css";

const initial = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [data, setData] = useState(initial);
  const [users, setUsers] = useState([]);
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
    //   axios.post("https://mockjson-0nv3.onrender.com/login", data)
    //   .then((res) => {
    //     console.log(res.data, "successfull")
    //     navigate("/adminPage");
    // });
    console.log(data)
  }

  return (
    <div id='mainLoginDiv'>

      <div id="loginPageContentDiv">

      
          <div id="loginImageDiv">
            {/* <img src="/Images/loginPageWallPaper.jpg" alt="loginWallpaper" /> */}
            <h3>Welcome</h3>
          </div>
            <div id='LoginFormDiv'>
              <form action="" onSubmit={(e) => handleSubmit(e)}>
                {/* <label htmlFor="email">User Name</label>
                <input type="email" name='email'  placeholder='Enter your User name'  onChange={handleChange}/>

                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Enter your Password'   onChange={handleChange}/> */}
                  <p>Login To Your Account</p>
                <Form.Floating className="mb-3">
                        <Form.Control
                          id="floatingInputCustom"
                          type="email"
                          placeholder="name@example.com"
                          name='email'
                          onChange={handleChange}
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                      </Form.Floating>
                      <Form.Floating>
                        <Form.Control
                          id="floatingPasswordCustom"
                          type="password"
                          placeholder="Password"
                          name='password'
                          onChange={handleChange}
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                  </Form.Floating>

                <input type="submit" value="Login" />

              </form>

              {/* <div id='already'>Don't Have an Account? <Link to="/">Register</Link> </div> */}
            </div>

        </div>
    </div>
  )
};

export default LoginPage;
