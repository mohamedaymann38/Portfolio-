import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
import logo from './images/qns #2 (3).jpg'
// let url = "./images/qns #2 (2).png"
// import img1 from './images/qns #2.png'
// import './App.css'
// import IMAGES from './images/index.js';
// import IMGS from './images.json'
const NNavBar = () => {
  return (
    <>
    <Navbar expand="lg"  bg="dark" >
        <Container>
            <NavLink to="/">
     </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navlinks  justify-content-end ">
                    <HashLink to="/#latest">Latest Builds</HashLink>
                    <HashLink to="/#process">Process</HashLink>
                    <HashLink to="/#service">Services</HashLink>
                    <HashLink to="/#contact">Contact Us</HashLink>
                    <NavLink to="/Projects">Projects</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar >
    {/* end navbar  */}
</>
  )
}

export default NNavBar