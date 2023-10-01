import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const theme = useSelector((state) => state.mainReducer.theme);
  let ColorCss2 = "footIcon me-3";
  let ColorCss2b = "footIcon github me-3";
  let cssFooter = "footBar d-flex justify-content-center align-items-center";

  if (theme === true) {
    ColorCss2 = "footIcon me-3";
    ColorCss2b = "footIcon github me-3";
    cssFooter = "footBar d-flex justify-content-center align-items-center";
  } else if (theme === false) {
    ColorCss2 = "me-3 footIcon2";
    ColorCss2b = "github me-3 footIcon2";
    cssFooter = "footBar2 d-flex justify-content-center align-items-center";
  }

  return (
    <div className={cssFooter}>
      <Link
        className={ColorCss2b}
        target="_blank"
        rel="noreferrer"
        to="https://github.com/Vallerga"
      >
        <AiFillGithub />
      </Link>
      <Link
        className={ColorCss2}
        target="_blank"
        rel="noreferrer"
        to="https://www.facebook.com/profile.php?id=100004782134748"
      >
        <BsFacebook />
      </Link>
      <Link
        className={ColorCss2}
        target="_blank"
        rel="noreferrer"
        to="https://www.linkedin.com/in/antonio-vallerga-2612a468/"
      >
        <BsLinkedin />
      </Link>
    </div>
  );
};

export default Footer;
