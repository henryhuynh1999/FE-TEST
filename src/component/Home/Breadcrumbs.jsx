import React from "react";
function Breadcrumbs(props) {
  return (
    <div className="breadcrumb">
      <div className="home-card-icon" onClick={props.handleClick}>
        <img
          src={props.icon}
          className="arrow-icon"
          style={{
            cursor: "pointer",
            position: "relative",
            top: "18px",
            left: "20px",
          }}
          alt=""
        />
      </div>
      <div className="home-title">{props.page}</div>
    </div>
  );
}

export default Breadcrumbs;
