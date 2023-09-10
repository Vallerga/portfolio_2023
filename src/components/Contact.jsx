import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((state) => state.mainReducer.theme);
  let cssForm = "formInput"
  let buttonForm = "ContactButton"
  
  if(theme === true) {
    cssForm = "formInput";
    buttonForm = "ContactButton"
  }else if (theme === false) {
    cssForm = "formInput2"
    buttonForm = "ContactButton2"
  }

  return (
    <form
      className="d-none d-flex flex-column align-items-center">
      <h2>Please Contact me:</h2>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="Name">
          Name:
        </label>
        <input type="text" placeholder="Your Name" name="UserName" id="Name" className={cssForm} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="mail">
          Email:
        </label>
        <input type="email" placeholder="Your Email" name="User_Email"  id="mail" className={cssForm} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="msg">
          Message:
        </label>
        <textarea placeholder="Message" name="User_Message"  id="msg" className={cssForm} rows="6" />
      </div>
      <button className={buttonForm} type="submit">
        <p>Send</p>
      </button>
    </form>
  );
};

export default Contact;
