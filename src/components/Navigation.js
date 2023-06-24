import React, { useState, useContext } from "react";
//*Routing
import { Link, useNavigate } from "react-router-dom";

//*Auth Context 
import { useAuth } from "../contexts/AuthContext";
//*Global Context
import { GlobalContext } from "../contexts/GlobalContext";

//*bootstrap
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//*images
import logoImg from "../assets/logo.png";

function Navigation() {
  //!STATE 
  const [logoutError, setLogoutError] = useState("");
  //!CONTEXT
  const { currentUser, logout } = useAuth();
  const { loginCheck, setLoginCheck } = useContext(GlobalContext);

  //!EVENTS
  async function handleLogout() {
    try {
      await logout();
      setLoginCheck(false);
    } catch {
      setLogoutError("Failed to log out");
    }
  }

  //!RENDER 
  return (
    <Navbar expand="lg" id="main-navbar">
      <Container fluid>
      <Link to="/" id="logo-img-link" className="">
        <img src={logoImg} id="logo-img" alt="logo-img" />
      </Link>        
      {/* media query BS hamburger navbarScroll is invisible here */}
        
        {/* connects toggle to #navbarScroll */}
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        {/* menu that collapse */}
        <Navbar.Collapse className="justify-content-end show" id="">
          <NavDropdown
            title="Your Profile"
            className="align-right"
            id="basic-navbar-nav"
          >
              <Link to="/rent" id="" className="">
                Rent Tools
              </Link>
              <Link to="/lend" id="" className="">
                Lend Tools
              </Link>
              <Link to="/" id="" className="">
                Your Tools
              </Link>
              <Link to="/update-profile" id="update-profile" className="">
                Update Profile
              </Link>
              <Link to="/about" id="about" className="">
                About Us
              </Link>
            <NavDropdown.Divider />
              <button id="logout" onClick={handleLogout}>
                Log Out
              </button>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


//! --> PRIVATE pages
export default Navigation;
