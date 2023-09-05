import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/chanti-image.jpg";
import "./index.css";

export const ProfilePicture = () => {
  return (
    <>
      <Link to="/home" className="picture_profile">
        <div className="content-profile">
          <img className="image_profile" src={image} alt="" />
        </div>
      </Link>
    </>
  );
};
