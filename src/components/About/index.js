import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.jpeg"

function About() {
    return(
        <section className="my-5">
           <h1 id="about">About me</h1>
            <img src={PortfolioImage} className="my-2" style={{ width: "20%", alignContent: "flex-start" }} alt="cover" ></img>
            <h6 style={{ width: "20%", alignItems: "center" }} id="about">Hi there! My name is Serhiy and I'm a web developer 
            with a backgorund as Quality Assurance Engineer.</h6>
        </section>
    );
}

export default About;