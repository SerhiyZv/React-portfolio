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

const Portfolio = (singleProject) => {

  const projectList = [
    {
      title: "Tech Blog",
      summary: "",
      image: techBlog,
      technologies: "",
      deployedLink: "https://serhiytechblog.herokuapp.com/",
      github: "https://github.com/SerhiyZv/Tech-blog",
    },
    {
        title: "Library",
        summary: "",
        image: library,
        technologies: "",
        deployedLink: "https://project2library.herokuapp.com/",
        github: "https://github.com/SerhiyZv/Project2_Library",
    },
    {
        title: "Memes God",
        summary: "",
        image: memes,
        technologies: "",
        deployedLink: "https://yaaseenk.github.io/Team-Project-1/",
        github: "https://github.com/YaaseenK/Team-Project-1",
    },
    {
        title: "Password Generator",
        summary: "",
        image: passGen,
        technologies: "",
        deployedLink: "https://serhiyzv.github.io/password-generator-javascript/",
        github: "https://github.com/SerhiyZv/password-generator-javascript",
    },
    {
        title: "Weather Dashboard",
        summary: "",
        image: weather,
        technologies: "",
        deployedLink: "https://serhiyzv.github.io/Weather-Dashboard/",
        github: "https://github.com/SerhiyZv/Weather-Dashboard",
    },
    {
        title: "Test Editor",
        summary: "",
        image: jast,
        technologies: "",
        deployedLink: "https://text-editor-sz.herokuapp.com/",
        github: "https://github.com/SerhiyZv/Text-Editor",
    },
    {
        title: "Work Day Scheduler",
        summary: "",
        image: workDay,
        technologies: "",
        deployedLink: "https://serhiyzv.github.io/work-day-scheduler/",
        github: "https://github.com/SerhiyZv/work-day-scheduler",
    },
    {
        title: "Team Profile Generator",
        summary: "",
        image: teamProf,
        technologies: "",
        deployedLink: "https://github.com/SerhiyZv/Team-Profile-Generator",
        github: "https://github.com/SerhiyZv/Team-Profile-Generator",
    },
];

  return (
    <div key={singleProject.title}>
      <div className="flex-row col-1">
            {projectList.map((singleProject) => (
            <Projects singleProject={singleProject}/>
        ))}
       </div>
    </div>
  );
};

export default Portfolio;