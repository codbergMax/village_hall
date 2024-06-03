import React from "react";
import "./intro.css";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/select");
  };
  return (
    <div className="logo-container">
      <img
        src={process.env.PUBLIC_URL + "/img/새마을회 로고.png"}
        alt="Logo"
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
      TEST
    </div>
  );
};

export default Intro;
