import React from "react";
import PortfolioImage from "../../assets/PortfolioImage.jpg"

function About() {
    return(
        <section className="my-5">
           <h1 id="about">About me</h1>
            
            <h6 style={{ width: "100%", alignItems: "center" }} id="about">Hi there! My name is Serhiy and I'm a web developer 
            with a background as Quality Assurance Engineer.</h6>
            <img src={PortfolioImage} className="my-2" style={{ width: "30%", alignContent: "flex-start" }} alt="cover" ></img>
            <div>
            <h2>My Story.</h2> 
            <div>Since I was a young child, I have always had an obsession with mountains and travelling.
                 Mountains exist to challenge us in different periods of our life. You realize 
                 there is nowhere better to go hiking. It is great exercise; 
                 the variety of terrain and the climbing angles cannot be replicated anywhere else. 
                 You do not need to be an expert mountaineer to experience these exercise benefits- it can be as
                  challenging as you want it to be. Building a web application is the same as climbing in the mountains.
                   In a world of mediocre designs and unresponsive layouts, I strive for excellence in both presentation 
                   and functionality, climbing higher and higher and seeing how beautiful is the virtual world.
            </div>
            <div>
            My content as an engineer also allows me to appreciate the difference between effective and flat imagination
             and practical usage, and I apply this knowledge to site design and functionality. 
             The gap between good and bad UX is almost as subjective as the bridge between good and bad blueprints, 
             but both have core principles and conventions that we should all follow. As an engineer and burgeoning web developer,
              I aim to meet usability, SEO and mobile standards in every application and then deliver compelling 
              content so that site and display work hand in hand to meet objectives and drive results.
            </div>

            </div>
        </section>
    );
}

export default About;