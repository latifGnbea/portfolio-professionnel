import React from "react";
import "./skills.css";

import htmlCss from "../../assets/html.png"
import css from "../../assets/css-3_5968242.png"
import js from "../../assets/js_5968292.png"
import react from "../../assets/react.png"
import node from "../../assets/2560px-Node.js_logo.png"
import mongo from "../../assets/mongo.png"

const Skills = () => {
  return (
    <section id="skills">
      <span className="skills-title">A Propos de moi</span>
      <span className="skills-description">
        Je suis passionné par l'informatique plus
        précisement par <b>la conception de site web et d'appliaction mobile</b> . Je
        suis ravi de vous accueillir sur cette plateforme où je partage mon
        travail, mes réalisations et mon parcours professionnel. <br />Mon parcours dans le domaine du developpement web a débuté il y a 4 ans, et depuis, j'ai eu l'opportunité de travailler sur une variété de projets passionnants. Mon objectif est de créer des solutions innovantes, créatives qui répondent aux besoins de mes clients et qui apportent une réelle valeur ajoutée.
      </span>

      <div className="skills-bars">
      <h3>Queleque langague que je maitrise : </h3>
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
      </div>
    </section>
  );
};

export default Skills;
