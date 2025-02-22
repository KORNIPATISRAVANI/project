// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Foodies</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for restaurants, dishes..." />
      </div>
    </header>
  );
};

export default Header;

