import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((state) => state.mainReducer.theme);
  const language = useSelector((state) => state.mainReducer.language);

  // language switch code
  let title = "Please Contact me:";
  let name = "Name";
  let mail = "Mail";
  let message = "Message";
  let send = "Send"
  if (language === "en") {
    title = "Please Contact me:"
    name = "Name";
    mail = "Mail";
    message = "Message";
    send = "Send"
  } else if (language === "it") {
    title = "Potete contattarmi:"
    name = "Nome";
    mail = "Email";
    message = "Messaggio";
    send = "Invia"
  }

  // theme switch code
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
      <h2>{title}</h2>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="Name">
          {name}
        </label>
        <input type="text" placeholder="Your Name" name="UserName" id="Name" className={cssForm} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="mail">
          {mail}
        </label>
        <input type="email" placeholder="Your Email" name="User_Email"  id="mail" className={cssForm} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="msg">
          {message}
        </label>
        <textarea placeholder="Message" name="User_Message"  id="msg" className={cssForm} rows="6" />
      </div>
      <button className={buttonForm} type="submit">
        <p>{send}</p>
      </button>
    </form>
  );
};

export default Contact;
