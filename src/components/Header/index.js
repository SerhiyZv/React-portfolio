import React from "react";

function Header(props) {
const { contactSelected, setContactSelected } = props;

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