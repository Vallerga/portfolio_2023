import { Col, Container, Row } from "react-bootstrap";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const Home = () => {
  const theme = useSelector((state) => state.mainReducer.theme);
  let cssHome = ""
  
  if(theme === true) {
    cssHome = "";
  }else if (theme === false) {
    cssHome = "lightTheme"
  }
  
  return (
    <>
      <Container fluid className={cssHome} style={{ padding: "0 15%" }}>
        <Row>
          <Col className="d-flex align-items-center justify-content-evenly">
            <div>
              <img
                src={require("../assets/images/varazze4.jpeg")}
                alt="profile portrait"
                className="myImage"
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <h1 className="nameTitle">HELLO! I'M ANTONIO VALLERGA!</h1>
              <div style={{ width: "50vw" }}></div>
              <div className="wrapper align-self-stretch">
                <svg>
                  <text x="50%" y="20%" dy=".35em" textAnchor="middle">
                    JUNIOR FULL-STACK DEVELOPER
                  </text>
                </svg>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-around">
            <h1 className="text-center">ABOUT</h1>
            <h1 className="text-center">SKILL</h1>
          </Col>
        </Row>
        <Skills />
        <Project />
        <Contact />
      </Container>
    </>
  );
};

export default Home;
