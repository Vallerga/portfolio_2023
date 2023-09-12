import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Project = () => {
  const language = useSelector((state) => state.mainReducer.language);

  // language switch code
  let title = "PROJECTS";
  if (language === "en") {
    title = "PROJECTS";
  } else if (language === "it") {
    title = "PROGETTI";
  }
  return (
    <Row className="d-flex mt-5 pb-5">
      <h1 className="text-center mb-4">{title}</h1>
      <Col
        md={6}
        xl={4}
        className="d-flex flex-column justify-content-center boxStyle"
      >
        <h2 className="my-3 py-md-0">Prestito Illuminato</h2>
        <Link to="https://github.com/Vallerga/Capstone_Project">
          <img
            className="projectImg"
            src={require("../assets/images/Capstone.jpg")}
            alt="Capstone Project"
          />
        </Link>
      </Col>
      <Col
        md={6}
        xl={4}
        className="d-flex flex-column justify-content-center boxStyle"
      >
        <h2 className="my-3 py-md-0">Spotify Clone</h2>
        <Link to="https://github.com/lollomarte/BW2/tree/develop">
          <img
            className="projectImg"
            src={require("../assets/images/Spotify Clone.jpg")}
            alt="Spotify Clone"
          />
        </Link>
      </Col>
      <Col
        md={6}
        xl={4}
        className="d-flex flex-column justify-content-center boxStyle"
      >
        <h2 className="my-3 py-md-0">SkillYouNeed</h2>
        <Link to="https://github.com/Vallerga/U2-W2-D5">
          <img
            className="projectImg"
            src={require("../assets/images/SkillYouNeed.jpg")}
            alt="SkillYouNeed"
          />
        </Link>
      </Col>
    </Row>
  );
};

export default Project;
