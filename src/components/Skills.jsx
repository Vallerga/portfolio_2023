import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Skills = () => {
  const theme = useSelector((state) => state.mainReducer.theme);
  const language = useSelector((state) => state.mainReducer.language);

  // language switch code
  let Text1It = "text-center mb-4";
  let Text2It = "text-center w-75";
  let Text1En = "text-center mb-4";
  let Text2En = "text-center w-75";
  let title1 = "ABOUT";
  let title2 = "SKILLS";

  if (language === "en") {
    Text1It = "text-center mb-4 d-none";
    Text2It = "text-center w-75 d-none";
    Text1En = "text-center mb-4";
    Text2En = "text-center w-75";
    title1 = "ABOUT";
    title2 = "SKILLS";
  } else if (language === "it") {
    Text1It = "text-center mb-4";
    Text2It = "text-center w-75";
    Text1En = "text-center mb-4 d-none";
    Text2En = "text-center w-75 d-none";
    title1 = "SU DI ME";
    title2 = "COMPETENZE";
  }

  // theme switch code
  let cssSkill = "skillSpace skillText d-flex flex-column align-items-center";

  if (theme === true) {
    cssSkill = "skillSpace skillText d-flex flex-column align-items-center";
  } else if (theme === false) {
    cssSkill = "skillSpace skillText2 d-flex flex-column align-items-center";
  }

  return (
    <>
      <Row>
        <Col className="d-xl-none">
          <h1 className="d-xl-none text-center">{title1}</h1>
          <p className={Text1It}>
            Sono uno sviluppatore web che studia Informatica da quasi due anni.
            <br />
            Mi contraddistingue il lavoro di squadra, la risoluzione dei
            problemi
            <br />e oltre 10 anni di esperienza a contatto con il pubblico. Sono{" "}
            <br />
            interessato a posizioni Front-End e Back-End e disponibile al
            trasferimento in tutta EU.
          </p>
          <p className={Text1En}>
            I am a Junior Web Developer who has been studying Computer Science
            for over a year. <br /> My other skills include over 10 years of
            experience in customer-service, team-working, problem-solving.
            <br /> I am interested in both Front-End and Back-End positions, and
            I am willing to relocate for the right opportunity anywhere whithin
            the EU.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-around">
          <h1 className="d-none d-xl-block text-center">{title1}</h1>
          <h1 className="text-center">{title2}</h1>
        </Col>
      </Row>
      <Row className="d-flex">
        <Col className="d-none d-xl-flex flex-column align-items-center">
          <p className={Text2En}>
            I am a Junior Web Developer who has been studying Computer Science
            for over a year. <br /> My other skills include over 10 years of
            experience in customer-service, team-working, problem-solving.
            <br /> I am interested in both Front-End and Back-End positions, and
            I am willing to relocate for the right opportunity anywhere whithin
            the EU.
          </p>
          <p className={Text2It}>
            Sono uno sviluppatore web che studia Informatica da quasi due anni.
            <br />
            Mi contraddistingue il lavoro di squadra, la risoluzione dei
            problemi
            <br />e oltre 10 anni di esperienza a contatto con il pubblico. Sono{" "}
            <br />
            interessato a posizioni Front-End e Back-End e disponibile al
            trasferimento in tutta EU.
          </p>
        </Col>
        <Col>
          <div className="d-flex justify-content-center mb-3">
            <div className={cssSkill}>
              <p>HTML5</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
              />
            </div>
            <div className={cssSkill}>
              <p>CSS3</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
              />
            </div>
            <div className={cssSkill}>
              <p>JavaScript</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
            </div>
            <div className={cssSkill}>
              <p>Bootstrap</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap"
              />
            </div>
            <div className={cssSkill}>
              <p>VSCode</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VSCode"
              />
            </div>
          </div>
          <div className="d-flex  justify-content-center mb-3">
            <div className={cssSkill}>
              <p>TypeScript</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                alt="TypeScript"
              />
            </div>
            <div className={cssSkill}>
              <p>React</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
            </div>
            <div className={cssSkill}>
              <p>NPM</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                alt="NPM"
              />
            </div>
            <div className={cssSkill}>
              <p>Java</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                alt="Java"
              />
            </div>
            <div className={cssSkill}>
              <p>Spring</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
                alt="Spring"
              />
            </div>
          </div>
          <div className="d-flex  justify-content-center">
            <div className={cssSkill}>
              <p>PostgreSQL</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                alt="PostgreSQL"
              />
            </div>
            <div className={cssSkill}>
              <p>PostMan</p>
              <img
                className="skillIcon"
                src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                alt="PostMan"
              />
            </div>
            <div className={cssSkill}>
              <p>Trello</p>
              <img
                className="skillIcon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
                alt="Trello"
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Skills;
