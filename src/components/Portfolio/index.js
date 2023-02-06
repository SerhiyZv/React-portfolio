// child component of Gallery component handles photo rendering logic
import React from "react";
import Project from "../../components/Project";
import techBlog from "../../assets/img/TechBlog.jpg";
import library from "../../assets/img/Library.jpg";


const Portfolio = (singleProject) => {

  const projects = [
    {
      title: "Tech Blog",
      image: techBlog,
      deployedLink: "https://serhiytechblog.herokuapp.com/",
      github: "https://github.com/SerhiyZv/Tech-blog",
    },
    {
      title: "Family Financials",
    },
    {
      title: "BrewMap 3.0",
    },
    {
      title: "Budget Tracker",
    },
    {
      title: "Tech Blog",
    },
    {
      title: "Note Taker",
    },
    {
      title: "Weather Dashboard",
    },
    {
      title: "Work Day Scheduler",
    },
];

  return (
    <div>
      <div className="flex-row">
          <h1>Projects</h1>
        {projects.map((singleProject) => (
            <Project singleProject={singleProject}/>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;