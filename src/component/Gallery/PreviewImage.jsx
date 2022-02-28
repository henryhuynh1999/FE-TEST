import React, { useState } from "react";
import images from "./images.js";
import "./gallery.css";
import icon from "../../Image/Arrow-black.png";
import Breadcrumbs from "../Home/Breadcrumbs.jsx";
import { useNavigate } from "react-router-dom";
function ListImage({ selectedImg, renderImage }) {
  const navigate = useNavigate();
  const [isActive, setActive] = useState("false");
  const listPreview = renderImage.map((e, index) => {
    if (index <= 3) {
      return e;
    }
  });
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <Breadcrumbs
        handleClick={() => {
          navigate(0);
        }}
        page="Preview"
        icon={icon}
      />
      <img
        src={selectedImg}
        className={isActive ? "preview-image" : null}
        style={{ width: "375px", height: "250px", cursor: "zoom-in" }}
        onClick={handleToggle}
      />
      <div className="list-preview">{listPreview}</div>
    </div>
  );
}

export default ListImage;
