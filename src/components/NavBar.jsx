import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTheme } from "../redux/action";

const NavBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.mainReducer.theme);
  console.log("theme da navbar:", theme)
  const toggleTheme = () => {
    dispatch(setTheme(theme));
  }

  // useEffect(() => {toggleTheme()}, [toggleTheme])


  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Link
            className="align-self-stretch text-decoration-none"
            to="https://1drv.ms/b/s!AuK5vWX_9zHzurYQhc5sbpl-OqSDMQ?e=ochZSi"
          >
            <p className="CVButton">Curriculum Vitae</p>
          </Link>
          <div className="navIcon d-flex align-items-center">
            <Link
              className="color2 github me-3"
              to="https://github.com/Vallerga"
            >
              <AiFillGithub />
            </Link>
            <Link
              className="color2 me-3"
              to="https://www.facebook.com/profile.php?id=100004782134748"
            >
              <BsFacebook />
            </Link>

            <Link className="color2 me-3" to="https://github.com/Vallerga">
              <BsLinkedin />
            </Link>
          </div>
        </div>
        <div className="themeButton" onClick={toggleTheme}>Theme</div>
      </div>
    </>
  );
};

export default NavBar;
