import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Project = () => {
    return(
<Row className="d-flex mt-5 pb-5">
          <h1 className="text-center mb-4">PROJECT</h1>
          <Col className="d-flex flex-column justify-content-center boxStyle">
            <h2>Prestito Illuminato</h2>
            <Link to="https://github.com/Vallerga/Capstone_Project">
              <img
                className="projectImg"
                src={require("../assets/images/Capstone.jpg")}
                alt="Capstone Project"
              />
            </Link>
          </Col>
          <Col className="d-flex flex-column justify-content-center boxStyle">
            <h2>Spotify Clone</h2>
            <Link to="https://github.com/lollomarte/BW2/tree/develop">
              <img
                className="projectImg"
                src={require("../assets/images/Spotify Clone.jpg")}
                alt="Spotify Clone"
              />
            </Link>
          </Col>
          <Col className="d-flex flex-column justify-content-center boxStyle">
            <h2>SkillYouNeed</h2>
            <Link to="https://github.com/Vallerga/U2-W2-D5">
              <img
                className="projectImg"
                src={require("../assets/images/SkillYouNeed.jpg")}
                alt="SkillYouNeed"
              />
            </Link>
          </Col>
        </Row>
)}

export default Project;