import React from "react";
import "./index.css";
import { ProfilePicture } from "../ProfilePicture/index.jsx";
import { PortfolioWeb } from "../PortfolioWeb/index.jsx";
export const Landing = () => {
  return (
    <>
      <div className="content_Landing">
        <PortfolioWeb />
        <div className="link_landing">
          <h2 className="title_landing">¿Quién esta viendo ahora?</h2>
          <ProfilePicture />
          <span className="name_profile">Chanti</span>
        </div>
      </div>
    </>
  );
};
