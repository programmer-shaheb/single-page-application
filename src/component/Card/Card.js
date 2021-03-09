import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, name, phone, email } = props.user;
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{name}</h5>
            <p className="card-text">Phone: {phone}</p>
            <Link to={`/users/${id}`} className="btn btn-primary">
              More...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
