import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.jpg"
import {
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaBootstrap,
    FaNode,
    FaReact,
    FaNpm,
  } from "react-icons/fa";
  import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import {
  SiMysql,
  SiHeroku,
  SiWebpack,
  SiRedux,
  SiReactrouter,
  SiGraphql,
} from "react-icons/si";

function About() {
    return(
        <div className="container">
            <div className="row">
            <div className="col-6">
            <img src={PortfolioImage} className="my-2" style={{ width: "50%"}} alt="cover" ></img>
            </div>
            <div className="col-6">
            <h1 id="about">About me</h1>
            <h6 style={{ width: "80%", justifyContent: "center" }} id="about">
            Hi there! My name is Serhiy, and I'm a full-stack software engineer. I
        graduated from the University of Toronto Web Development Bootcamp, which
        equipped me with a strong foundation in object-oriented programming of progressive web
        applications using MongoDB, Express, React and Node.js (MERN)
        JavaScript stack.
        <br></br>
        <br></br>Inspired by my background in QA engineering in a Case management application for hospitals, I hope
        to alleviate the need for ease of control and access to medical resources,
        and create a better Case manager application to control doctors and nurses
         and get feedback from users with more health-minded lifestyles in workplaces. 
         I'd be happy to connect and innovate with the user in mind*✧･ﾟ:
        </h6>
        <br></br>
        <br></br>
        <br></br>
        <h4>Technical Skills:</h4>
        <h2><FaHtml5 /><FaCss3Alt /><FaJsSquare /><DiJqueryLogo /><FaReact /><SiRedux /><FaBootstrap /><FaNode /><SiMysql /><DiMongodb /><SiGraphql /></h2>
        </div>
      </div>
    </div>
    );
}

export default About;