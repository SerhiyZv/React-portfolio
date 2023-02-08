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
      summary: "This is a Tech-Blog web application for users to write blog posts and post comments. The application follows the MVC paradigm and is built using Handlebars and Bootstrap for the front end, Node.js and Express for the server and API, Sequelize as the ODM, and MySQL for the database. All data is hosted in MySQL database on Heroku, including authentication for creating accounts and signing in users to ensure that only those with an assigned username and credentials can add posts or comments. User is able to update and delete their existing posts.",
      image: techBlog,
      technologies: "JavaScript (Node.js), SQL (MySQL), HTML (Handlebars.js), CSS (Bootstrap & custom CSS)",
      deployedLink: "https://serhiytechblog.herokuapp.com/",
      github: "https://github.com/SerhiyZv/Tech-blog",
    },
    {
        title: "Library",
        summary: "The project developed mainly focuses on basic operations in a library like adding new member, new books, and updating new information, searching books and members and facility to issue and return books.",
        image: library,
        technologies: "JavaScript (Node.js), SQL (MySQL), HTML (Handlebars.js), CSS (Bootstrap & custom CSS)",
        deployedLink: "https://project2library.herokuapp.com/",
        github: "https://github.com/SerhiyZv/Project2_Library",
    },
    {
        title: "Memes God",
        summary: "This is a responsive front end application that uses 2 Sever-side API to retrieve humourous memes from various sources for the viewers amusement. -This application uses HTML, CSS, Java Script, and is deployed through GitHub. -This application uses client-side storage to store persistent data.",
        image: memes,
        technologies: "JavaScript (Node.js), HTML (Handlebars.js), CSS (Bootstrap & custom CSS)",
        deployedLink: "https://yaaseenk.github.io/Team-Project-1/",
        github: "https://github.com/YaaseenK/Team-Project-1",
    },
    {
        title: "Password Generator",
        summary: "This application generates a random password based on user-selected criteria. The application validates the user input and ensures that at least one character type is selected.",
        image: passGen,
        technologies: "HTML, CSS, JavaScript",
        deployedLink: "https://serhiyzv.github.io/password-generator-javascript/",
        github: "https://github.com/SerhiyZv/password-generator-javascript",
    },
    {
        title: "Weather Dashboard",
        summary: "Weather Dashboard application v1.0. The Weather Dashboard application is the single-window web-application to display current weather and 5-days forecast for cities search by user. Application is using OpenWeather API po pull weather and forecast information for cities around the world.",
        image: weather,
        technologies: "HTML, CSS, JavaScript",
        deployedLink: "https://serhiyzv.github.io/Weather-Dashboard/",
        github: "https://github.com/SerhiyZv/Weather-Dashboard",
    },
    {
        title: "Test Editor",
        summary: "This is a simple text editor app that can function both online and offline.",
        image: jast,
        technologies: "HTML, CSS, JavaScript, NodeJS, ExpressJS",
        deployedLink: "https://text-editor-sz.herokuapp.com/",
        github: "https://github.com/SerhiyZv/Text-Editor",
    },
    {
        title: "Work Day Scheduler",
        summary: "This application is a daily planner that can help with users' time management.",
        image: workDay,
        technologies: "HTML, CSS, JavaScript, JQuery",
        deployedLink: "https://serhiyzv.github.io/work-day-scheduler/",
        github: "https://github.com/SerhiyZv/work-day-scheduler",
    },
    {
        title: "Team Profile Generator",
        summary: "This is a command-line application that generates an HTML file of a Team Profile for easy access to contact, IDs, Office number(for manager), Github(for engineer) and School(for Interns).",
        image: teamProf,
        technologies: "JavaScript (Node.js), HTML",
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