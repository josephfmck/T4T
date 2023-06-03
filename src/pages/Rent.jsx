import React, { useEffect, useState } from "react";
//*Routing
import { Link, useNavigate } from "react-router-dom";
//*Auth
import { useAuth } from "../contexts/AuthContext";
//*DB
// import { useDB } from "../contexts/DBContext";
//*images
import t4tImg from "../assets/T4Twelcome.png";
import logoImg from "../assets/logo.png";
//* CSS
import "./rent.scss";
//*bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//*components
import ToolList from "../components/ToolList";


function Rent() {
  //!STATE
  const [error, setError] = useState("");
  //!CONTEXT
  //*firebase Auth Context:
  const { currentUser, logout } = useAuth();
  // //*DB Context:
  // const { toolsList, getToolsList } = useDB();
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

  // async function handleToolsBtn() {

  //   try {
  //     //reads and returns toolsList state from DB 
  //     await getToolsList();
  //   } catch {
  //     setError("Failed to get Tools List");
  //   }
  // }

  return (
    <>
      <div id="bg-img">
        <img src={t4tImg} alt="t4tImg" />
      </div>
      <header>
        <img src={logoImg} className="logoheader" alt="logoheader" />
        {currentUser ? (
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
        {currentUser ? (
          <button variant="link" id="logout" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <></>
        )}
      </header>

      <Container className="bg-white mt-5 d-flex align-items-center justify-content-center flex-column">
        <Row>
            <h1 className="text-center my-5">Rent a Tool</h1>
        </Row>
        <ToolList />
        {/* <Button id="toolsListBtn" onClick={handleToolsBtn}>Get tools List from DB</Button> */}
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

export default Rent;
