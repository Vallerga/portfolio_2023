const Contact = () => {
  return (
    <form
      className="d-flex flex-column align-items-center formCss">
      <h2>Please Contact me:</h2>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="Name">
          Name:
        </label>
        <input type="text" placeholder="Your Name" name="UserName" id="Name" className="formInput" />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="mail">
          Email:
        </label>
        <input type="email" placeholder="Your Email" name="User_Email"  id="mail" className="formInput" />
      </div>
      <div className="d-flex flex-column align-items-start">
        <label className="fs-5 ms-3 mb-2" htmlFor="msg">
          Message:
        </label>
        <textarea placeholder="Message" name="User_Message"  id="msg" className="formInput" rows="6" />
      </div>
      <button className="ContactButton" type="submit">
        <p>Send</p>
      </button>
    </form>
  );
};

export default Contact;
