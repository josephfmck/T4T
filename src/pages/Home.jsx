import React, {useState} from "react";
//*Routing
import { Link, useNavigate } from "react-router-dom";

//*Auth 
import { useAuth, currentUser } from "../contexts/AuthContext";
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

//*html


function Home() {
  //!STATE
  const [error, setError] = useState("");
  //!CONTEXT
  //*firebase Auth Context:
  const { currentUser, logout } = useAuth();
  //!HOOKS
  const navigate = useNavigate();

  //!EVENTS
  async function handleLogout() {
    setError("Log out failed");

    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <div id="bg-img">
        <img src={t4tImg} alt="t4tImg" />
      </div>
      <header>
        <img src={logoImg} className="logoheader" alt="logoheader" />
        {currentUser ? (
        <>
          <button id="about" className="private">About Us</button>
          <button id="update-profile">Update Profile</button>
        </>
        ) : (
        <button id="about">About Us</button>
        )}

        {/* if logged in display log out, else nothing */}
        {currentUser ? (
          <button variant="link" id="logout" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          ""
        )}
      </header>

      <Container>
        <Row>
          <div className="top-content mt-5 mx-auto">
            {currentUser ? (
              <> 
                <Button id="rentBtn">Rent Tools</Button>
                <Button id="lendBtn">Lend Tools</Button>
              </>
            ) : (
              <>
            <Link to="/signup" id="registerBtn" className="">
              <Button id="signUpBtn">Sign Up</Button>
            </Link>

            <Link to="/login" id="loginBtn" className="">
              <Button id="loginBtn">Login</Button>
            </Link>
              </>
            )}
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
