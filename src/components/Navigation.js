//*Routing
import { Link, useNavigate } from "react-router-dom";

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
  return (
    <Navbar expand="lg" id="main-navbar">
      <Container fluid>
      <Link to="/" id="logo-img-link" className="">
        <img src={logoImg} id="logo-img" alt="logo-img" />
      </Link>        
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* links that collapse */}
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          <NavDropdown
            title="Your Profile"
            className="align-right"
            id="basic-navbar-nav"
          >
              <Link to="/about" id="about" className="">
                About Us
              </Link>
              <Link to="/update-profile" id="update-profile" className="">
                Update Profile
              </Link>
            <NavDropdown.Divider />
              <button id="logout">
                Log Out
              </button>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
