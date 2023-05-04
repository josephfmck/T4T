import React from "react";
//*images
import t4tImg from "../assets/T4Twelcome.png";
import logoImg from "../assets/logo.png";

//* CSS
import "./home.scss";

//*bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <>
      <div id="bg-img">
        <img src={t4tImg} alt="t4tImg" />
      </div>
      <header>
        <img src={logoImg} className="logoheader" alt="logoheader" />
        <button>About Us</button>
      </header>

      <Container>
        <Row>
          <div className="top-content mt-3 mx-auto">
            <Button id="registerBtn">Register</Button>
            <Button id="loginBtn">Login</Button>
          </div>
        </Row>
        {/* <Row>
        <Button>RENT-A-TOOL</Button>
        <Button>LEND-A-TOOL</Button>
        </Row> */}
      </Container>

      {/* <nav>
            <a className="active home" href="/">
              HOME
            </a>
            <a href="tools" className="rent">
              RENT
            </a>
            <a href="lender" className="lend">
              LEND
            </a>
            <a href="/#aboutUs" className="about">
              ABOUT US
            </a>
            <a href="/#callDave" className="callDave">
              NEED ADVICE? - CALL DAVE
            </a>
          </nav> */}

      <footer>
        <div className="push">
          &copy; <img src={logoImg} className="logo" alt="logo" /> 2023. All
          Rights Reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
