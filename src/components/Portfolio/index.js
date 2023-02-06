// child component of Gallery component handles photo rendering logic
import React from "react";
import Projects from "../../components/Project";
import techBlog from "../../assets/img/TechBlog.jpg";
import library from "../../assets/img/Library.jpg";
import memes from "../../assets/img/Memes.jpg";
import passGen from "../../assets/img/PassGen.jpg";
import weather from "../../assets/img/Weather.jpg";
import jast from "../../assets/img/JAST.jpg";
import workDay from "../../assets/img/WorkDayScheduler.jpg";
import teamProf from "../../assets/img/TeamProfileGenerator.jpg";

const Portfolio = () => {

  const projectList = [
    {
      title: "Tech Blog",
      image: techBlog,
      deployedLink: "https://serhiytechblog.herokuapp.com/",
      github: "https://github.com/SerhiyZv/Tech-blog",
    },
    {
        title: "Library",
        image: library,
        deployedLink: "https://project2library.herokuapp.com/",
        github: "https://github.com/SerhiyZv/Project2_Library",
    },
    {
        title: "Memes God",
        image: memes,
        deployedLink: "https://yaaseenk.github.io/Team-Project-1/",
        github: "https://github.com/YaaseenK/Team-Project-1",
    },
    {
        title: "Password Generator",
        image: passGen,
        deployedLink: "https://serhiyzv.github.io/password-generator-javascript/",
        github: "https://github.com/SerhiyZv/password-generator-javascript",
    },
    {
        title: "Weather Dashboard",
        image: weather,
        deployedLink: "https://serhiyzv.github.io/Weather-Dashboard/",
        github: "https://github.com/SerhiyZv/Weather-Dashboard",
    },
    {
        title: "Test Editor",
        image: jast,
        deployedLink: "https://text-editor-sz.herokuapp.com/",
        github: "https://github.com/SerhiyZv/Text-Editor",
    },
    {
        title: "Work Day Scheduler",
        image: workDay,
        deployedLink: "https://serhiyzv.github.io/work-day-scheduler/",
        github: "https://github.com/SerhiyZv/work-day-scheduler",
    },
    {
        title: "Team Profile Generator",
        image: teamProf,
        deployedLink: "https://github.com/SerhiyZv/Team-Profile-Generator",
        github: "https://github.com/SerhiyZv/Team-Profile-Generator",
    },
];

  return (
    <div>
      <div className="flex-row">
          <h1>Projects</h1>
          <br></br>
      </div> 
      <div>
        {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;