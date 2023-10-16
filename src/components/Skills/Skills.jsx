import React, { useState } from "react";
import "./skills.css";

import htmlCss from "../../assets/html.png";
import css from "../../assets/css-3_5968242.png";
import js from "../../assets/js_5968292.png";
import react from "../../assets/react.png";
import node from "../../assets/2560px-Node.js_logo.png";
import mongo from "../../assets/mongo.png";
import github from "../../assets/github.png";
import gitlab from "../../assets/gitlab.png";
import photoshop from "../../assets/photoshop.png";
import figma from "../../assets/figma-logo.png";
import ui from "../../assets/ui-design.png";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const skillBodyClass = isVisible ? "skill-body" : " skill-body-visible";

  return (
    <section id="skills">
      <span className="skills-title">A Propos de moi</span>
      <span className="skills-description">
        Je suis passionné par l'informatique plus précisement par{" "}
        <b>la conception de site web et d'appliaction mobile</b> . Je suis ravi
        de vous accueillir sur cette plateforme où je partage mon travail, mes
        réalisations et mon parcours professionnel. <br />
        Mon parcours dans le domaine du developpement web a débuté il y a 4 ans,
        et depuis, j'ai eu l'opportunité de travailler sur une variété de
        projets passionnants. Mon objectif est de créer des solutions
        innovantes, créatives qui répondent aux besoins de mes clients et qui
        apportent une réelle valeur ajoutée.
      </span>

      <div className="skills-bars">
        <div className="skill-bloc">
          <div className="skill-title">
            <h3>Queleque langague que je maitrise : </h3>
            <span onClick={toggleVisibility}>...</span>
          </div>
          <div className={skillBodyClass}>
            <div className="skills-bar">
              <img src={htmlCss} alt="html" className="skills-bar-img" />
              <div className="skills-bar-text">
                <h2>Html</h2>
              </div>
            </div>

            <div className="skills-bar">
              <img src={css} alt="css" className="skills-bar-img" />
              <div className="skills-bar-text">
                <h2>Css</h2>
              </div>
            </div>
            
            <div className="skills-bar">
              <img src={js} alt="js" className="skills-bar-img" />
              <div className="skills-bar-text">
                <h2>Javascript ES6</h2>
              </div>
            </div>
            <div className="skills-bar">
              <img src={react} alt="ReactJS" className="skills-bar-img" />
              <div className="skills-bar-text">
                <h2>React JS</h2>
              </div>
            </div>
          </div>
        </div>

        <h3>Queleque technologie que je maitrise : </h3>
        <div className="skills-bar">
          <img src={node} alt="nodeJS" className="skills-bar-img" />
          <div className="skills-bar-text">
            <h2>Node JS</h2>
          </div>
        </div>
        <div className="skills-bar">
          <img src={mongo} alt="mongoDB" className="skills-bar-img" />
          <div className="skills-bar-text">
            <h2>mongoDB</h2>
          </div>
        </div>
        <h3>Queleque outil de version que je maitrise : </h3>
        <div className="skills-bar">
          <img src={github} alt="github" className="skills-bar-img" />
          <div className="skills-bar-text">
            <h2>Github</h2>
          </div>
        </div>
        <div className="skills-bar">
          <img src={gitlab} alt="gitlab" className="skills-bar-img" />
          <div className="skills-bar-text">
            <h2>Gitlab</h2>
          </div>
        </div>
        <h3>Queleque outil que je maitrise : </h3>
        <div className="skills-bar">
          <img src={photoshop} alt="photoshop" className="skills-bar-img" />
          <div className="skills-bar-text">
            <h2>Photoshop</h2>
          </div>
        </div>
        <div className="skills-bar">
          <img src={figma} alt="figma" className="skills-bar-img" />
          <div className="skills-bar-text">
            <h2>Figma</h2>
          </div>
        </div>
        <div className="skills-bar">
          <img src={ui} alt="ui" className="skills-bar-img" />
          <div className="skills-bar-text">
            <h2>UX/UI</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
