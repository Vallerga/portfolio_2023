import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((state) => state.mainReducer.theme);
  const language = useSelector((state) => state.mainReducer.language);

  // language switch code
  let title = "Please Contact me:";
  let name = "Name";
  let placeName = "Digit a name";
  let mail = "Mail";
  let placeMail = "Digit a mail";
  let message = "Message";
  let placeMessage = "Digit a message";
  let send = "Send"
  if (language === "en") {
    title = "Please Contact me:"
    name = "Name:";
    placeName = "Digit a name";
    mail = "Mail:";
    placeMail = "Digit a mail";
    message = "Message:";
    placeMessage = "Digit a message";
    send = "Send"
  } else if (language === "it") {
    title = "Potete contattarmi:"
    name = "Nome:";
    placeName = "Inserisci il nome";
    mail = "Email:";
    placeMail = "Inserisci la email";
    message = "Messaggio:";
    placeMessage = "Inserisci un messaggio";
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
      className="d-flex flex-column align-items-center" id="contact-form">
      <h2>{title}</h2>
      <input type="hidden" name="contact_number" />
      <div className="d-flex flex-column align-items-start">
        <label className="fotmLabel ms-3 mb-2" htmlFor="Name">
          {name}
        </label>
        <input type="text" placeholder={placeName} name="user_name" id="Name" className={cssForm} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fotmLabel ms-3 mb-2" htmlFor="mail">
          {mail}
        </label>
        <input type="email" placeholder={placeMail} name="user_email"  id="mail" className={cssForm} />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fotmLabel ms-3 mb-2" htmlFor="msg">
          {message}
        </label>
        <textarea placeholder={placeMessage} name="message"  id="msg" className={cssForm} rows="6" />
      </div>
      <button className={buttonForm} type="submit" value="Send">
        <p>{send}</p>
      </button>
    </form>
  );
};

export default Contact;
