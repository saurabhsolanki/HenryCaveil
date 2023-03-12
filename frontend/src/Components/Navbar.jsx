import React from 'react'
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom'
import './CSS/Navbar.css'

const TopNavbar = () => {

    const menuData=[
        {
            path:"/",
            name:"Home"
        },
        {
            path:"/about",
            name:"About Us"
        },
        {
            path:"/contactPage",
            name:"Contact Us"
        },
        {
            path:"/service",
            name:"Services"
        }
    ]

  return (
    <Navbar className='navbar sticky-top' expand="lg">
      <Container>
        <Navbar.Brand  className='brand'>
         <Link to='/'> <img src="https://certificate.hhword.website/images/Untitled-1-01%20(1).png" alt="" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id='NavbarLinks'>
                {
                    menuData.map((item)=>(
                        <Link to={item.path} key={item.name} > 
                                <div className="list_item">{item.name}</div>
                        </Link>
                    ))
                }
          </Nav>

          <Nav className='ms-auto'>
            <button className="btn btn-success">Get Started</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar
