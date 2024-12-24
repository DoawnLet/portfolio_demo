import "./HeroImgStyle.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import React from "react";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER.</p>
        <h1>Front end developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
        </div>
        <div>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
