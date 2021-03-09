import React from "react";
import "../Common/Common.css";
import web from "../../images/home.svg";
import Common from "../Common/Common";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With"
        imgsrc={web}
        visit="/users"
        btn="Get Started"
      ></Common>
    </>
  );
};

export default Home;
