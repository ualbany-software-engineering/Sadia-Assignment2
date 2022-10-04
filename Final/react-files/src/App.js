import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const shortText = "Khandker Sadia Rahman";
const longText =
  "Hi guys! This is Sadia, a PhD student and graduate research Assistant in University at Albany, SUNY.";

function App() {
  return (
  <div>
    <Navbar />
    <Container fluid="md">
      <Row>
          <Col xs={3}>
          <img src={require("./Headshot.jpeg")} width="300" height="300" class="d-inline-block align-top" alt="" />
          </Col>
          <Col >
          <p>{shortText}</p>
          <p>{longText}</p>
          </Col>
      </Row>
    </Container>       
  </div>
  );
}

export default App;

