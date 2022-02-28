import React, { useState, useEffect } from "react";
import "./Header.css";
import images from "../Gallery/images";
import Battery from "../../Image/Battery.png";
import Connection from "../../Image/Connection.png";
import Wifi from "../../Image/Wifi.png";

function Header() {
  const [date, setDate] = useState(new Date());
  if (!date) return ""; // customTime
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const customTime = `${hours}:${minutes}`;
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="header">
      <div className="header-left">{customTime}</div>
      <div className="header-right">
        <ul className="header-right-list">
          <span className="header-right-item">
            <img src={Connection} alt="" />
          </span>
          <span className="header-right-item">
            <img src={Wifi} alt="" />
          </span>
          <span className="header-right-item">
            <img src={Battery} alt="" />
          </span>
        </ul>
      </div>
    </div>
  );
}

export default Header;
