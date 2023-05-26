import React, {useState, useContext} from "react";
//*Routing
import { Link, useNavigate } from "react-router-dom";

//*Auth 
import { useAuth } from "../contexts/AuthContext";
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

//*Global Context
import { GlobalContext } from "../contexts/GlobalContext";


function Home() {
  //!STATE
  const [error, setError] = useState("");
  //!CONTEXT
  //*firebase Auth Context:
  const { currentUser, logout } = useAuth();
  //*Global Context:
  const { loginCheck, setLoginCheck } = useContext(GlobalContext);
  //!HOOKS
  const navigate = useNavigate();

  //!EVENTS
  async function handleLogout() {
    try {
      await logout();
      setLoginCheck(false);
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
        {currentUser && loginCheck && loginCheck === true ? (
        <>
          <Link to="/about" id="about" className="private">
            <button>About Us</button>
          </Link>

          <Link to="/update-profile" id="update-profile" className="">
            <button>Update Profile</button>
          </Link>
        </>
        ) : (
          <Link to="/about" id="about">
            <button className="">About Us</button>
          </Link>
        )}

        {/* if logged in display log out, else nothing */}
        {currentUser && loginCheck && loginCheck === true ? (
          <button variant="link" id="logout" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <></>
        )}
      </header>

      <Container>
        <Row>
          <div className="top-content mt-5 mx-auto">
            {currentUser && loginCheck && loginCheck === true ? (
              <> 
                <Button id="rentBtn">Rent Tools</Button>
                <Button id="lendBtn">Lend Tools</Button>
              </>
            ) : (
              <>
            <Link to="/signup" className="">
              <Button>Sign Up</Button>
            </Link>

            <Link to="/login" className="">
              <Button>Login</Button>
            </Link>
              </>
            )}
          </div>
        </Row>
      </Container>
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
