import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u5kf0lf",
        "template_ww4uoei",
        formRef.current,
        "user_NIUql1w17KxvJdCVWqggw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +92 3122229164
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              hafizjunaid971@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              karachi pakistan
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="First name" name="firstname"  required/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Last name" name="lastname" required />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="email" required />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Phone" name="phone" required />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" required />
            <button>Submit</button>
            {done && "Thank you..."
             && window.location.reload()
            
            }
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
