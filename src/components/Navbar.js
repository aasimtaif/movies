import React from "react";
import "../styles/Navbar.css";
export default function Navbar({ setInputValue, inputValue ,search}) {
  console.log(inputValue);
  return (
    <div className="navbar">
      <span className="heading">MOVIE DB</span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress = {search}
        className="searchBar"
        type="text"
        placeholder="Search....."
      />
    </div>
  );
}
