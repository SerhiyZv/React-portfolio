import React from "react";
import { IconContext } from "react-icons/lib";
import { FaGithub, FaEnvelope, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Footer() {

  return (

    <IconContext.Provider value={{ size:"3em", style : { marginLeft: "4rem", marginBottom: "2rem", alignItems:"center"} }}>
    <footer>
        <div>
        <a href="mailto:skiev31@gmail.com">
          <FaEnvelope />
        </a>
        <a href="https://github.com/SerhiyZv" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/SerhiyZv/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        {/* <FontAwesomeIcon icon={faCoffee} /> */}
        <a href="https://stackoverflow.com/users/17373308" target="_blank" rel="noreferrer">
          <FaStackOverflow />
        </a> 
        </div>       
    </footer>
    </IconContext.Provider>
  );

}

export default Footer;