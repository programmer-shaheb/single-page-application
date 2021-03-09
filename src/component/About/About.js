import React from "react";
import "../Common/Common.css";
import web from "../../images/about.svg";
import Common from "../Common/Common";

const About = () => {
  return (
    <>
      <Common name="About" imgsrc={web} visit="/" btn="Bact To Home"></Common>
    </>
  );
};

export default About;
