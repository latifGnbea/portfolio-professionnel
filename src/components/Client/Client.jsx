import React from "react";
import "./client.css";
import Walmar from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";

const Client = () => {
  return (
    <section id="client">
      <span className="client-title">My Client</span>
      <span className="client-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        accusamus ratione nemo veniam quo asperiores.
      </span>
      <div className="client-imgs">
        <img src={Walmar} alt="client" className="client-img" />
        <img src={adobe} alt="client" className="client-img" />
        <img src={microsoft} alt="client" className="client-img" />
        <img src={facebook} alt="client" className="client-img" />
      </div>
    </section>
  );
};

export default Client;
