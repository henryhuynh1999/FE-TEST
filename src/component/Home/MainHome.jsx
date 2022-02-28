import React from "react";
import Home from "../Home/Home";
import Breadcrumbs from "./Breadcrumbs";
import { Link } from "react-router-dom";

function MainHome() {
  return (
    <div>
      <Breadcrumbs page="Eastplayers Test" />
      <Link to="/todo">
        <Home name="TodoList" number="1" />
      </Link>
      <Link to="/country">
        <Home name="Country list" number="2" />
      </Link>
      <Link to="/gallery">
        <Home name="Image gallery" number="3" />
      </Link>
    </div>
  );
}

export default MainHome;
