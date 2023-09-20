import React, { useRef } from "react";
import "./contact.css";
import facebookIcon from "../../assets/facebook-icon.png";
// import twitterIcon from "../../assets/twitter.png";
import linkedInIcon from "../../assets/Linkedin.png";
import instagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fwvr6l7",
        "template_emiigoc",
        form.current,
        "FlLohRcDZo_eIDn7r"
      )
      .then(
        (result) => {
          setTimeout(() => {
            console.log(result.text);
            toast.success("Message envoye");
            e.target.reset();
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          toast.success("Message non envoye Echec !!!");
        }
      );
  };

  return (
    <section id="contact">
      <span className="contact-title">Contact </span>
      <span className="contact-description">
        Laissez moi un message pour toute collaboration ou une simple salutation
        :-)
      </span>
      <form action="" ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          placeholder="Your name"
          className="name"
          name="your_name"
          required
        />
        <input
          type="email"
          placeholder="Your email"
          className="email"
          name="your_email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your message"
          className="message"
          required
        ></textarea>
        <button type="submit" value="send" className="submit-btn">
          Submit
        </button>

        <div className="links">
          <a href="https://www.facebook.com/profile.php?id=100091747421764&mibextid=nW3QTL" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="link" />
          </a>
          {/* <img src={twitterIcon} alt="twitter" className="link" /> */}
          <a
            href="https://instagram.com/nwar_1_7?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="instagram" className="link" />
          </a>
          <a
            href="https://ci.linkedin.com/in/junior-gneba-0a4788284"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="linkedIn" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
