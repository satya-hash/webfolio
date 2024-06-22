import React, { useEffect, useRef, useState } from "react";
import phone from "../../assets/icons/phone.png";
import whatsapp from "../../assets/icons/whatsapp.png";
import gmail from "../../assets/icons/mail.png";
import emailjs from "@emailjs/browser";
import sr from "../ScrollReveal";
import "./contact.scss";

function Contact() {
  const formRef = useRef();
  const [mail, setMail] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm("sercice_id", "template_id", formRef.current, "public_key")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setMail((prev) => ({ ...prev, [name]: value }));
  }
  useEffect(() => {
    sr.reveal(".touch", { delay: "100" });
    sr.reveal(".form", { delay: "250" });
  }, []);
  return (
    <div className="contact">
      <h3> Contact </h3>

      <div>
        <div className="touch">
          {" "}
          <h2>Get in touch</h2>{" "}
          <p>
            {" "}
            Want to get in touch? I'd love to hear from you. Here's how you can
            reach out...{" "}
          </p>
          <div className="icons">
            <ul>
              <li>
                <a href="tel:9550973113">
                  <img src={phone} alt="phone" />
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=9550973113&text=Hi%20we%20need%20help%20regarding%20something"
                  target="_blank"
                >
                  <img src={whatsapp} alt="whatsapp" />
                </a>
              </li>
              <li>
                <a href="mailto:sathyagangadhara@gmail.com">
                  <img src={gmail} alt="mail" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className="form" ref={formRef} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="user_name"
            id="name"
            value={mail.name}
            placeholder="Enter Name"
          />
          <input
            onChange={handleChange}
            type="email"
            name="user_email"
            id="email"
            value={mail.email}
            placeholder="Enter Mail"
          />
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            placeholder="Message..."
            value={mail.message}
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit"> Send </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
