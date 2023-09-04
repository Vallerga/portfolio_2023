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
            <div className="d-flex flex-column">
              <h1 className="mt-5">HELLO! I'M ANTONIO VALLERGA!</h1>
              <div style={{width:"35vw"}}></div>
              <div class="wrapper">
                <svg>
                  <text x="50%" y="20%" dy=".35em" text-anchor="middle">
                  JUNIOR FULL-STACK DEVELOPER
                  </text>
                </svg>
              </div>
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
            <h1 className="text-center">SKILL</h1>
            <div>
              <div className="d-flex justify-content-center mb-3">
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">HTML5</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">CSS3</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">JavaScript</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">Bootstrap</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">VSCode</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VSCode"
                  />
                </div>
              </div>
              <div className="d-flex  justify-content-center mb-3">
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">TypeScript</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                    alt="TypeScript"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">React</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">NPM</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                    alt="NPM"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">Java</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                    alt="Java"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">Spring</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                    alt="Spring"
                  />
                </div>
              </div>
              <div className="d-flex  justify-content-center">                
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">PostgreSQL</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                    alt="PostgreSQL"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">PostMan</p>
                  <img
                    className="skillIcon"
                    src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                    alt="PostMan"
                  />
                </div>
                <div className="skillSpace d-flex flex-column align-items-center">
                  <p className="skillText">Trello</p>
                  <img
                    className="skillIcon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
                    alt="Trello"
                  />
                </div>
              </div>
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
