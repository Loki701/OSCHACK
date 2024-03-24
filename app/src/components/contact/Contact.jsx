import "./Contact.css";
import { useState } from "react";
import Button from "../button/Button";

const Contact = () => {
  const [formStatus, setformStatus] = useState(false);

  const toast = document.getElementsByClassName("toast");
  const progress = document.getElementsByClassName("progress");

  let timer1, timer2;
  const handleNotification = () => {
    toast[0].classList.add("active");
    progress[0].classList.add("active");

    timer1 = setTimeout(() => {
      toast[0].classList.remove("active");
    }, 5000);

    timer2 = setTimeout(() => {
      progress[0].classList.remove("active");
    }, 5300);
  };
  const handleClosingNotification = () => {
    toast[0].classList.remove("active");
    setTimeout(() => {
      progress[0].classList.remove("active");
    }, 300);

    clearTimeout(timer1);
    clearTimeout(timer2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      handleNotification();
    }, 200);
    setformStatus(!formStatus);
  };
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <p>WE'D LOVE TO HEAR FROM YOU!</p>
        <h1>CONTACT US</h1>
      </div>
      <div className="toast">
        <div className="toast-content">
          <i className="bx bx-check check"></i>

          <div className="message">
            <span className="text text-1">Success</span>
            <span className="text text-2">Your Letter has been send!</span>
          </div>
        </div>
        <i className="bx bx-x close" onClick={handleClosingNotification}></i>
        <div className="progress"></div>
      </div>
      <div className="contact-info">
        {!formStatus ? (
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <div className="input-field">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  required
                />
                <span className="focus"></span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
              </div>
              <div className="input-field">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  required
                />
                <span className="focus"></span>
                <span className="animate scroll" style={{ "--i": 1 }}></span>
              </div>
            </div>
            <div className="textarea-field">
              <textarea
                name="message"
                id=""
                cols={30}
                rows={10}
                placeholder="Your Message"
                required
              ></textarea>
              <span className="focus"></span>
              <span className="animate scroll" style={{ "--i": 3 }}></span>
            </div>
            <div className="button-container">
              <Button
                title="Send"
                id="contact-button"
                click={handleSubmit}
                bgT={true}
              />
              <span
                className="animate scroll"
                style={{ "--i": 4, background: "black" }}
              ></span>
            </div>
          </form>
        ) : (
          <h1 style={{ textAlign: "center", fontSize: "4rem", marginTop: "10rem" }}>
            Thanks for Contacting Us!
          </h1>
        )}
      </div>
    </section>
  );
};

export default Contact;
