import React from "react";
import "./Search.css";
import location from "./location.png"

export default function Search() {
  return (
    <form className="Search">
      <input type="search" className="search" placeholder="Search for city" />
      <input type="submit" className="search-btn" value="Search" />
      <button className="search-btn">
        <img src={location} alt="location icon" className="img-btn" />
      </button>
    </form>
  );
}