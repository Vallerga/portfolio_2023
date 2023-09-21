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
    <>
      <Row className="d-flex mt-5 justify-content-center pb-5">
        <h1 className="text-center py-0 mb-0 mb-md-4">{title}</h1>
        <Col
          md={6}
          xl={4}
          className="d-flex flex-column justify-content-center boxStyle"
        >
          <h2 className="my-3 py-md-0">Prestito Illuminato</h2>
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://github.com/Vallerga/Capstone_Project"
          >
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
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://github.com/Vallerga/Spotify_clone_BW2"
          >
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
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://github.com/Vallerga/U2-W2-D5"
          >
            <img
              className="projectImg"
              src={require("../assets/images/SkillYouNeed.jpg")}
              alt="SkillYouNeed"
            />
          </Link>
        </Col>
        <Col
          md={6}
          xl={4}
          className="d-flex flex-column justify-content-center boxStyle"
        >
          <h2 className="my-3 py-md-0">Player Multimediale</h2>
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://github.com/Vallerga/u4-w1-d5-java"
          >
            <img
              className="projectImg"
              src={require("../assets/images/Player_Multimediale.png")}
              alt="Player Multimediale"
            />
          </Link>
        </Col>
       </Row>
      {/*<Row className="d-flex justify-content-center pb-5">
        <Col
          md={6}
          xl={4}
          className="d-flex flex-column justify-content-center boxStyle"
        >
          <h2 className="my-3 py-md-0">Player Multimediale</h2>
          <Link
            target="_blank"
            rel="noreferrer"
            to="https://github.com/Vallerga/u4-w1-d5-java"
          >
            <img
              className="projectImg"
              src={require("../assets/images/Player_Multimediale.png")}
              alt="Player Multimediale"
            />
          </Link>
        </Col>
      </Row> */}
    </>
  );
};

export default Project;
