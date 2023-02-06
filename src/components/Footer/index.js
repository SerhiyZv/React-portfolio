import React from "react";
import { IconContext } from "react-icons/lib";
import { FaGithub, FaEnvelope, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {

  return (

    <Container >
    <IconContext.Provider value={{ size:"3em" }}>
    <footer>
        <Row>
        <Col md={{ span: 4, offset: 10 }}>
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
        </Col> 
        </Row>      
    </footer>
    </IconContext.Provider>
    </Container>
  );

}

export default Footer;