import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
import menuIcon from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          A propos de moi
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        {/* <Link
          activeClass="active"
          to="client"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link> */}
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        Contact Me
      </button>

      <img src={menuIcon} alt="Menu" className="mob-menu" onClick={()=>{setShowMenu(!showMenu)}} />
      <div className="nav-menu" style={{display:showMenu? "flex" : "none"}}> 
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list-item"
          onClick={()=>{setShowMenu(false)}}
          
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={()=>{setShowMenu(false)}}
        >
          A propos de moi
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={()=>{setShowMenu(false)}}
        >
          Portfolio
        </Link>
        {/* <Link
          activeClass="active"
          to="client"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={()=>{setShowMenu(false)}}
        >
          Clients
        </Link> */}
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list-item"
          onClick={()=>{setShowMenu(false)}}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
