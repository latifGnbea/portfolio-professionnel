import React from "react";
import "./intro.css";
import bg from "../../assets/bg.png";
// import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import resume from "../../assets/cvLatif2023.pdf"

const Intro = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Dévéloppeur web junior Full stack",
      "Graphiste",
      "Technicien Réeseau",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Bonjour,</span>
        <span className="introText">
          Je suis
          <span className="introName"> Latif Idriss Junior GNEBA</span>
          <br />
          <span> {typeEffect} </span> <Cursor />
        </span>
        <p className="introPara">Bonjour et bienvenue sur mon portfolio !</p>
        <a href={resume} download="resume" rel="noopener noreferrer">
          <button className="btn">
            <img src={btnImg} alt="cv" className="btnImg"  />
            MON CV
          </button>
        </a>
      </div>

      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
