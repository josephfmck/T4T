import React, { useEffect, useState } from "react";
//*Routing
import { Link, useNavigate } from "react-router-dom";

//*Auth
import { useAuth } from "../contexts/AuthContext";
//*DB
import { useDB } from "../contexts/DBContext";
//*images
import t4tImg from "../assets/T4Twelcome.png";
import logoImg from "../assets/logo.png";

//* CSS
import "./lend.scss";

//*bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//*html

function Lend() {
  //!STATE
  const [error, setError] = useState("");
  //?move to DB context later 
  const [toolName, setToolName] = useState("");
  const [toolDuration, setToolDuration] = useState("");
  const [toolPrice, setToolPrice] = useState(0);
  //!CONTEXT
  //*firebase Auth Context:
  const { currentUser, logout } = useAuth();
  //*DB Context:
  const { toolsList, addTool } = useDB();
  //!HOOKS
  const navigate = useNavigate();

  //!EVENTS
  async function handleLogout() {
    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }

  async function onSubmit() {
    try {
      await addTool(toolName, toolDuration, toolPrice);
    }
    catch {
      setError("Failed to submit tool");
    }
  }

  // async function handleSubmit() {

  //   try {
  //     //submit form tool to DB
  //     await getToolsList();
  //   } catch {
  //     setError("Failed to submit tool");
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
            <h1 className="text-center my-5">Lend a Tool</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formToolName">
                <Form.Label>Tools Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter tools name" 
                  onChange={(e) => 
                    setToolName(e.target.value)
                  }
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDuration">
                <Form.Label>Duration of Rental</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Weekly/BiWeekly/Monthly"
                  onChange={(e) => 
                    setToolDuration(e.target.value)
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder={5}
                  onChange={(e) => 
                    setToolPrice(Number(e.target.value))
                  } 
                />
              </Form.Group>
              <div className="mx-auto text-center">
              <Button 
                type="submit"
                onClick={onSubmit}
              >
                Submit Tool for Rental
              </Button>
              </div>
            </Form>
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

export default Lend;
