import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.jpg"

function About() {
    return(
        <section className="col-10">
           <h1 id="about">About me</h1>
            <img src={PortfolioImage} className="my-2" style={{ width: "35%"}} alt="cover" ></img>
            <h6 style={{ width: "40%", justifyContent: "center" }} id="about">
            Hi there! My name is Serhiy, and I'm a full-stack software engineer. I
        graduated from the University of Toronto Web Development Bootcamp, which
        equipped me with a strong foundation in object-oriented programming of progressive web
        applications using MongoDB, Express, React and Node.js (MERN)
        JavaScript stack. Inspired by my background in QA engineering in a Case management application for hospitals, I hope
        to alleviate the need for ease of control and access to medical resources,
        and create a better Case manager application to control doctors and nurses
         and get feedback from users with more health-minded lifestyles in workplaces. 
         I'd be happy to connect and innovate with the user in mind*✧･ﾟ:
        </h6>
        </section>
    );
}

export default About;