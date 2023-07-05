import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
//*Firebase Auth Context
import { useAuth } from "../contexts/AuthContext";
import { useDB } from "../contexts/DBContext";
import { Link, useNavigate } from "react-router-dom";
//*Global context
import { GlobalContext } from "../contexts/GlobalContext";
//*Storage Context
import { useStorage } from "../contexts/StorageContext";
//*CSS
import { ListGroup, Card, Button, Row, Col } from "react-bootstrap";

//*IMG
import hammerIMG from "../assets/tools/photo-hammer.jfif";

function ToolList() {
  //!REFS
  //!CONTEXT
  //*Auth Context:
  const { login, currentUser } = useAuth();
  //*DB Context
  const { toolsList, getToolsList } = useDB();
  //*Storage Context
  const { getAllImages, imagesList } = useStorage();
  //*global context
  const { loginCheck, setLoginCheck } = useContext(GlobalContext);

  //!STATE
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  // const [imagesList, setImagesList] = useState([]);

  // Run getToolsList when the component mounts
  //!Empty [] PREVENTS FROM RUNNING INFINITELY
  useEffect(() => {
    //callback prevents running twice
    const fetchImages = async () => {
      await getAllImages();
      getToolsList();
    };
    fetchImages();
  }, []);

  return (
    <div className="toolList-Container">
      {console.log(currentUser)}

      <Row xs={1} md={3} className="g-4">
        {toolsList.map((tool) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }} key={tool.id}>
                <Card.Img variant="top" src={tool.image} />
                <Card.Body>
                  <Card.Title>{tool.name}</Card.Title>

                  <Card.Text>
                    {tool.duration}: ${tool.price}.00
                  </Card.Text>

                  <Row>
                    <Col>
                      <Button variant="primary">Rent Tool</Button>
                    </Col>
                    <Col>
                      <Card.Text>Owner: {currentUser.displayName}</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default ToolList;
