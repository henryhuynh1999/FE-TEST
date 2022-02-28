import React, { useState } from "react";
import ListImage from "./PreviewImage";
import images from "./images.js";
import Breadcrumbs from "../Home/Breadcrumbs";
import icon from "../../Image/arrow-black.png";
import { useNavigate } from "react-router-dom";
function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  const renderImage = images.map((e, index) => {
    return (
      <img
        src={e}
        className="gallery"
        onClick={() => setSelectedImg(e)}
        key={index}
        alt=""
      />
    );
  });
  if (!selectedImg) {
    return (
      <div>
        <Breadcrumbs
          handleClick={() => {
            navigate(-1);
          }}
          page="Image gallery"
          icon={icon}
        />
        {renderImage}
      </div>
    );
  } else {
    return (
      <ListImage
        renderImage={renderImage}
        selectedImg={selectedImg}
      ></ListImage>
    );
  }
}

export default Gallery;
