import React, { useEffect, useState, useContext } from "react";
//*Routing
import { Link, useNavigate } from "react-router-dom";
//*Contexts
//*Auth
import { useAuth } from "../contexts/AuthContext";
//*DB
import { useDB } from "../contexts/DBContext";
//*Storage
import { useStorage } from "../contexts/StorageContext";
//*Global
import { GlobalContext } from "../contexts/GlobalContext";

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

//*components
import Navigation from "../components/Navigation";


function Lend() {
  //!STATE
  const [error, setError] = useState("");
  //*form state 
  //?move to DB context later 
  const [toolName, setToolName] = useState("");
  const [toolDuration, setToolDuration] = useState("");
  const [toolPrice, setToolPrice] = useState(0);
  const [toolImg, setToolImg] = useState(null);
  //!CONTEXT
  //*firebase Auth Context:
  const { currentUser } = useAuth();
  //*DB Context:
  const { toolsList, addTool } = useDB();
  //*Storgage Context:
  const { uploadImage } = useStorage();
  //*Global Context:
  const { loginCheck, setLoginCheck } = useContext(GlobalContext);
  


  //!EVENTS

  async function onSubmit(e) {
    e.preventDefault();
    try {

      //!UPLOAD IMAGE TO FIREBASE STORAGE
      if (toolImg == null) {
        return;
      } else {
        //upload image to firebase: ref, img uploading
        await uploadImage(toolImg);
      }
      
      //state passed in
      await addTool(toolName, toolDuration, toolPrice, toolImg);
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

      {/* if logged in PRIVATE, else PUBLIC */}
      {currentUser && loginCheck && loginCheck === true ? (
        // !PRIVATE
        <Navigation />
      ) : (
        // !PUBLIC
        <header>
          <img src={logoImg} className="logoheader" alt="logoheader" />
          <Link to="/about" id="about">
            <button className="">About Us</button>
          </Link>
        </header>
      )}

      <Container className="bg-white mt-5 d-flex align-items-center justify-content-center flex-column">
        <Row>
            <h1 className="text-center my-3">Lend a Tool</h1>
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
              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control 
                  type="file" 
                  onChange={(e) => {
                    console.log(e.target.files[0])
                    setToolImg(e.target.files[0])
                    }
                  } />
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
