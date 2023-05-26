import React from "react";

const logo = "https://avatars.githubusercontent.com/u/13678971?v=4";

const HeadingBar = () => {
  return (
    <div className="heading-bar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="heading-bar">
        <h1 className="name">Price Checker</h1>
      </div>
    </div>
  );
};

export default HeadingBar;
