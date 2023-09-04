import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container fluid style={{ padding: "0 15%" }}>
        <Row>
          <Col className="mt-5 d-flex align-items-center justify-content-evenly">
            <div>
              <img
                src={require("../assets/images/varazze4.jpeg")}
                alt="profile portrait"
                className="myImage"
              />
            </div>
            <div className="text-start">
              <h1>HELLO! I'M</h1>
              <h1>ANTONIO VALLERGA</h1>
              <h1>JUNIOR FULL-STACK</h1>
            </div>
          </Col>
        </Row>
        <Row className="d-flex my-5">
          <Col>
            <h1>ABOUT</h1>
            <p>
              I am Junior Web Developer who has been studying Computer Science
              for over a year. With more than 10 years of experience in
              customer-service and working in teams. I am eager to apply my
              skills in both Front-End, Back-End positions and open to travel
              for opportunities olso in an international enviroment.
            </p>
          </Col>
          <Col>
            <h1>SKILL</h1>
            <div>
            <img className="skillIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
            <img src="" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="d-flex my-5">
          <h1 className="text-center mb-4">PROJECT</h1>
          <Col>
            <h1>project1</h1>Lorem ipsum dolor sit amet. Maxime ad rem id
            laudantium! Repellat magni at veniam voluptatibus. Magni rem
            inventore fugit. Aliquid. Deserunt reiciendis voluptates asperiores
            animi.
          </Col>
          <Col>
            <h1>project1</h1>Lorem ipsum dolor sit amet. Maxime ad rem id
            laudantium! Repellat magni at veniam voluptatibus. Magni rem
            inventore fugit. Aliquid. Deserunt reiciendis voluptates asperiores
            animi.
          </Col>
          <Col>
            <h1>project1</h1>Lorem ipsum dolor sit amet. Maxime ad rem id
            laudantium! Repellat magni at veniam voluptatibus. Magni rem
            inventore fugit. Aliquid. Deserunt reiciendis voluptates asperiores
            animi.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
