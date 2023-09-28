import React from "react";
import "./portfolio.css";
import P1 from "../../assets/croquis_carte_monde.png";
// import P2 from "../../assets/portfolio-2.png";
// import P3 from "../../assets/portfolio-3.png";
// import P4 from "../../assets/portfolio-4.png";
// import P5 from "../../assets/portfolio-5.png";
import P2 from "../../assets/P22.PNG";
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
          tags="#Html #Css #ReactJS #NodeJS"
          description="Site web qui affiche tous les pays du monde ainsi que la population total et la capital avec un système de filtre en fonction du continent "
          imageUrl={P1}
          githubLink="https://gitlab.com/projet_personnel2/carte-du-monde.git"
          liveDemoLink="https://latifgnbea.github.io/carte-monde/"
        />
        <Presentation
          title="Backend Gestion d'hotel"
          tags=" #NodeJS #Express #jwtoken #dotenv #mongoose "
          description="Presentaion de la réalisation du backend de l'applicatif Gestion d'hotel avec qui gere divers fonctionnalite à savoir Gestion des utilisateur compte et connection , Gestion des Gestion d'hotel  en CRUD , Session utilisatuer gérée avec le JsonWebToken "
          imageUrl={P2}
          githubLink="https://gitlab.com/projet_personnel2/gestion-hotel.git"
        />
      </div>
      {/* <button className="portfolio-btn">See more</button> */}
    </section>
  );
};

export default Portfolio;
