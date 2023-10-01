import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLanguage, setTheme } from "../redux/action";

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.mainReducer.theme);
  const language = useSelector((state) => state.mainReducer.language);

  // language switch code
  console.log("language da navbar:", language);
  const togglelanguage = (arg) => {
    dispatch(setLanguage(arg));
  };

  // Theme switch code
  const toggleTheme = () => {
    dispatch(setTheme(theme));
  };

  let ColorCss1 =
    "d-flex justify-content-between align-items-center lightTheme2";
  let ColorCss2 = "color2 me-3";
  let ColorCss2b = "color2 github me-3";
  let ColorCss3 = "d-flex justify-content-between align-items-center";
  let CVButton = "CVButtonDark d-none d-sm-block";
  let navLogo = "Portfolio_Logo_slim.png";

  if (theme === true) {
    ColorCss1 = "d-flex justify-content-between align-items-center lightTheme2";
    ColorCss2 = "color2 me-3";
    ColorCss2b = "color2 github me-3";
    ColorCss3 = "d-flex justify-content-between align-items-center";
    CVButton = "CVButtonDark d-none d-sm-block";
    navLogo = "Portfolio_Logo_slim.png";
  } else if (theme === false) {
    ColorCss1 = "d-flex justify-content-between align-items-center lightTheme";
    ColorCss2 = "color2 me-3 lightTheme";
    ColorCss2b = "color2 github me-3 lightTheme";
    ColorCss3 = "d-flex justify-content-between align-items-center lightTheme";
    CVButton = "CVButtonLight d-none d-sm-block";
    navLogo = "Portfolio_Logo_Slim_LightTheme.png";
  }

  return (
    <>
      <div className={ColorCss3}>
        <div className="d-flex align items-center">
          <div className="navLogoBox">
            <img
              className="navLogo"
              src={require("../assets/images/" + navLogo)}
              alt="Logo"
            />
            <img
              className="navLogo d-none"
              src={require("../assets/images/Portfolio_Logo_Slim_LightTheme.png")}
              alt="Logo"
            />
          </div>
          <Link
            target="_blank"
            rel="noreferrer"
            className="align-self-stretch text-decoration-none"
            to="https://1drv.ms/b/s!AuK5vWX_9zHzva1J0926sLLiIwTC0Q?e=lEsNSz"
          >
            <p className={CVButton}>Curriculum Vitae</p>
          </Link>
          <div className="navIcon d-flex align-items-center">
            <Link
              target="_blank"
              rel="noreferrer"
              className={ColorCss2b}
              to="https://github.com/Vallerga"
            >
              <AiFillGithub />
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              className={ColorCss2}
              to="https://www.facebook.com/profile.php?id=100004782134748"
            >
              <BsFacebook />
            </Link>

            <Link
              target="_blank"
              rel="noreferrer"
              className={ColorCss2}
              to="https://www.linkedin.com/in/antonio-vallerga-2612a468/"
            >
              <BsLinkedin />
            </Link>
          </div>
        </div>
        <div className={ColorCss1}>
          <div className="themeIcon2">
            {language === "it" && (
              <img
                className="flag me-2"
                src={require("../assets/images/ItalyFlag.jpg")}
                alt="ita"
                onClick={() => {
                  togglelanguage("en");
                }}
              />
            )}
            {language === "en" && (
              <img
                className="flag me-2"
                src={require("../assets/images/EngFlag.png")}
                alt="eng"
                onClick={() => {
                  togglelanguage("it");
                }}
              />
            )}
          </div>
          <div className="themeIcon">
            {theme && (
              <MdDarkMode
                onClick={() => {
                  toggleTheme();
                }}
              />
            )}
            {theme || (
              <BsFillSunFill
                onClick={() => {
                  toggleTheme();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
