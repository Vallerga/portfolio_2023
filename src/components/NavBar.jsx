import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin, BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "../redux/action";

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.mainReducer.theme);
  console.log("theme da navbar:", theme);
  const toggleTheme = () => {
    dispatch(setTheme(theme));
  };

  let ColorCss1 = "d-flex justify-content-between align-items-center";
  let ColorCss2 = "color2 me-3";
  let ColorCss2b = "color2 github me-3";
  let CVButton = "CVButtonDark d-none d-sm-block";
  let navLogo = "Portfolio_Logo_slim.png";

  // const themeSetter = () => {
  if (theme === true) {
    ColorCss1 = "d-flex justify-content-between align-items-center";
    ColorCss2 = "color2 me-3";
    ColorCss2b = "color2 github me-3";
    CVButton = "CVButtonDark d-none d-sm-block";
    navLogo = "Portfolio_Logo_slim.png";
  } else if (theme === false) {
    ColorCss1 = "d-flex justify-content-between align-items-center lightTheme";
    ColorCss2 = "color2 me-3 lightTheme";
    ColorCss2b = "color2 github me-3 lightTheme";
    CVButton = "CVButtonLight d-none d-sm-block";
    navLogo = "Portfolio_Logo_Slim_LightTheme.png";
  }

  // useEffect(() => {toggleTheme()}, [toggleTheme])

  return (
    <>
      <div className={ColorCss1}>
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
            className="align-self-stretch text-decoration-none"
            to="https://1drv.ms/b/s!AuK5vWX_9zHzva04pa7bNGs6vlkUpQ?e=xs0DtY"
          >
            <p className={CVButton}>Curriculum Vitae</p>
          </Link>
          <div className="navIcon d-flex align-items-center">
            <Link className={ColorCss2b} to="https://github.com/Vallerga">
              <AiFillGithub />
            </Link>
            <Link
              className={ColorCss2}
              to="https://www.facebook.com/profile.php?id=100004782134748"
            >
              <BsFacebook />
            </Link>

            <Link className={ColorCss2} to="https://github.com/Vallerga">
              <BsLinkedin />
            </Link>
          </div>
        </div>
        <div
          className="themeIcon"
          onClick={() => {
            toggleTheme();
            //themeSetter();
          }}
        >
        {theme && <MdDarkMode />}
        {theme || <BsFillSunFill />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
