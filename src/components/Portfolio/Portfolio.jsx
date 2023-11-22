import React from "react";
import "./portfolio.css";
import P1 from "../../assets/croquis_carte_monde.png";
// import P2 from "../../assets/portfolio-2.png";
import P3 from "../../assets/todo1.png";
// import P4 from "../../assets/portfolio-4.png";
// import P5 from "../../assets/portfolio-5.png";
import P2 from "../../assets/P22.PNG";
import portfolio from "../../assets/PortfolioProjet.png";
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
        <Presentation
          title="Portfolio"
          tags=" #React #Emailjs"
          description="Ce portfolio présente une collection de mes projets, compétences et expériences professionnelles dans le domaine du developpement web. Je suis passionné par la création de site web et je suis constamment en train d'apprendre et d'évoluer dans ce domaine."
          imageUrl={portfolio}
          githubLink="https://gitlab.com/projet_personnel2/gestion-hotel.git"
        />
        <Presentation
          title="Todo-list"
          tags=" #React #Vite "
          description="Dans ce projet, nous allons créer une application Todo complète avec toutes les fonctionnalités. Nous effectuerons toutes les opérations CRUD. Nous utiliserons React.js et, pour gérer nos états, nous utiliserons Redux. De plus, nous apprendrons à créer des animations simples en utilisant Framer Motion. J'espère que cela vous plaira."
          imageUrl={P3}
          githubLink="https://gitlab.com/latifGnbea/todolist-by-latif.git"
          liveDemoLink="https://todolist-by-latif.vercel.app/"
        />
      </div>
      {/* <button className="portfolio-btn">See more</button> */}
    </section>
  );
};

export default Portfolio;
