import React from "react";
/*
Stateless Functional Component : Doesn't have render and other (data) management or life-cycle methods.
No 'this' and State
Styling tutorial: https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
*/

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="text-white navbar-brand"
      >
        Todo App
      </a>
    </nav>
  );
};

export default Navbar;
