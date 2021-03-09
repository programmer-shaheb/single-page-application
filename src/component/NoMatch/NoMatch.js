import React from "react";
import img from "../../images/404.svg";
import "../Common/Common.css";

const NoMatch = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto text-center">
            <img className="mt-5 img-fluid animated" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NoMatch;
