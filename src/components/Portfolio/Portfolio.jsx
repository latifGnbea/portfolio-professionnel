import React from "react";
import "./portfolio.css";
import P1 from "../../assets/croquis_carte_monde.png";
// import P2 from "../../assets/portfolio-2.png";
// import P3 from "../../assets/portfolio-3.png";
// import P4 from "../../assets/portfolio-4.png";
// import P5 from "../../assets/portfolio-5.png";
import P6 from "../../assets/portfolio-6.png";
import Presentation from "../Presentation/Presentation";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <span className="portfolio-title">Portfolio</span>
      <span className="portfolio-description">
        Découvrez mes réalisations et projets passionnants ci-dessous. Chacun
        d'entre eux représente un voyage unique à travers des idées, des défis
        et des solutions créatives. Explorez mon travail et plongez dans mon
        univers de création.
      </span>

      <div className="portfolio-imgs">
      <Presentation
          title="Carte du monde"
          tags="#Html #Css #ReactJS NodeJS"
          description="Site web qui affiche tous les pays du monde ainsi que la population total et la capital avec un système de filtre en fonction du continent "
          imageUrl={P1}
          githubLink="https://gitlab.com/projet_personnel2/carte-du-monde.git"
          liveDemoLink="#"
        />
        <Presentation
          title="Projet A"
          description="Site web qui affiche tous les pays du monde ainsi que la population total et la capital avec un système de filtre en fonction du continent "
          imageUrl={P6}
          githubLink="#"
          liveDemoLink="#"
        />
      </div>
      {/* <button className="portfolio-btn">See more</button> */}
    </section>
  );
};

export default Portfolio;
