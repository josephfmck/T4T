import React, { useRef, useState, useContext } from "react";
//*Firebase Auth Context
import { useAuth } from "../contexts/AuthContext";
import { useDB } from "../contexts/DBContext";
import { Link, useNavigate } from "react-router-dom";
//*Global context
import { GlobalContext } from "../contexts/GlobalContext";
//*CSS
import { ListGroup, Card, Button } from "react-bootstrap";



function ToolList() {
  //!REFS
  //!CONTEXT
  //*Auth Context:
  const { login, currentUser } = useAuth();
  //*DB Context
  const { toolsList, getToolsList } = useDB();
  //*global context
  const { loginCheck, setLoginCheck } = useContext(GlobalContext);

  //!STATE
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  //!EVENTS
//   async function handleToolsBtn() {

//     try {
//       //reads and returns toolsList state from DB 
//       await getToolsList();
//     } catch {
//       setError("Failed to get Tools List");
//     }
//   }



  return (
    <>
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Tool Name</Card.Title>
        <Card.Text>
          Tool duration
          Tool price
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    {toolsList.map((tool) => {
        return (
          <Card style={{ width: '18rem' }} key={tool.id}>
            <Card.Body>
              <Card.Title>{tool.name}</Card.Title>
              <Card.Text>
                {tool.duration} {tool.price}
              </Card.Text>
              <Card.Text>
                {tool.duration} {tool.price}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        )
    })};

    {/* <Button id="toolsListBtn" onClick={handleToolsBtn}>Get tools List from DB</Button> */}
    </>
  );
}

export default ToolList;
