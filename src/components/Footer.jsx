import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footIcon d-flex justify-content-center align-items-center">
      <Link className="color2 github me-3" to="https://github.com/Vallerga">
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
  );
};

export default Footer;
