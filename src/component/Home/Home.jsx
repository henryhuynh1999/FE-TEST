import React from "react";
import arrow from "../../Image/Arrow.png";
// import { Link } from "react-router-dom";
import "./Home.css";
function Home(props) {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-card">
          <div className="home-card-count">
            <span className="home-card-number">{props.number}</span>
          </div>
          <div className="home-card-name">{props.name}</div>
          <div className="home-card-icon">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
