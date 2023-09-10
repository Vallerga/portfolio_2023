import { Col, Container, Row } from "react-bootstrap";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useSelector((state) => state.mainReducer.theme);
  let cssHome = "pagePadding";
  let CVButton = "CVButtonDark d-sm-none";

  if (theme === true) {
    cssHome = "pagePadding";
    CVButton = "CVButtonDark d-sm-none";
  } else if (theme === false) {
    cssHome = "pagePadding lightTheme";
    CVButton = "CVButtonLight d-sm-none";
  }

  return (
    <>
      <Container fluid className={cssHome}>
        <Row>
          <Col
            xl={4}
            className="d-flex align-items-center justify-content-evenly"
          >
            <div>
              <img
                src={require("../assets/images/varazze4.jpeg")}
                alt="profile portrait"
                className="myImage"
              />
            </div>
          </Col>
          <Col className="d-none d-md-block" xl={8}>
            <div className="d-flex flex-column align-items-center">
              <h1 className="nameTitle nameTitleFont">
                HELLO! I'M ANTONIO VALLERGA!
              </h1>
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
          <Col className="d-md-none" xl={8}>
            <div className="d-flex flex-column align-items-center">
              <Link
                className="align-self-center text-decoration-none"
                to="https://1drv.ms/b/s!AuK5vWX_9zHzva04pa7bNGs6vlkUpQ?e=xs0DtY"
              >
                <p className={CVButton}>Curriculum Vitae</p>
              </Link>
              <h2 className="mt-4 nameTitleFont">HELLO! I'M </h2>
              <h2 className="nameTitleFont">ANTONIO VALLERGA!</h2>
              <div style={{ width: "80vw" }}></div>
              <div className="wrapper">
                <svg>
                  <text x="50%" y="10%" dy=".35em" textAnchor="middle">
                    JUNIOR FULL-STACK
                  </text>
                </svg>
              </div>
              <div className="wrapper">
                <svg>
                  <text x="50%" y="10%" dy=".35em" textAnchor="middle">
                    WEB DEVELOPER
                  </text>
                </svg>
              </div>
            </div>
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
