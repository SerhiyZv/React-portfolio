import React, { useState } from "react";

function Header(props) {
  // const [categories] = useState([
  //   { name: "Porfolio" },
  //   {
  //     name: "Contact",
  //   },
  //   {
  //     name: "Resume",
  //   },
  // ]);

  // const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <header>
        <h2>
        <a href="/">
          <span role="img" aria-label="camera">
           🤵
          </span>
          Serhiy Zvedenyuk
        </a>
      </h2>
    </header>
  );
}

export default Header;