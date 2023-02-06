import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // initial value of contactSelected is false, prevent ContactForm from showing initially
  // Gallery and About displays instead
  const [page, setPage] = useState("About me");

  const [categories] = useState([
    {name: "About me"},
    
    {name: "Portfolio"},

    {name: "Contact"},

    {name: "Resume"},

  ]);

  const currentPage = () => {
    switch (page) {
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <ContactForm />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header categories={categories} page={page} setPage={setPage} ></Header>
      <main>
       <div>{currentPage(page)}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
