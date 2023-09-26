import React from 'react'
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/esm/NavLink';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
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
                {/* {
                    menuData.map((item)=>(
                        <Link to={item.path} key={item.name} > 
                                <div className="list_item">{item.name}</div>
                        </Link>
                    ))
                } */}
                  <Nav.Link ><Link className="list_item" to='/'>Home</Link></Nav.Link>
                  <NavDropdown  title="Courses" id="basic-nav-dropdown" >
                    <NavDropdown.Item href="#action/3.1"> <Link className="list_item" to='/medicalCoding'>Medical Coding</Link> </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1"> <Link className="list_item" to='/medicalTranscription'>Medical Transcription</Link> </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link > <Link className="list_item" to='/aboutPage'>About Us</Link></Nav.Link>
                  <Nav.Link > <Link className="list_item" to='/contactPage'>Contact Us</Link> </Nav.Link>
                  <Nav.Link > <Link className="list_item" to='/blogPage'>Blog</Link> </Nav.Link>
          </Nav>

          <Nav className='ms-auto'>
            <button className="btn btn-success">Request Demo</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar
