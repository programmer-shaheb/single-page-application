import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const UserDetail = () => {
  const [details, setDetails] = useState({
    company: {},
  });

  const { id } = useParams();
  const history = useHistory();
  const btnHandler = () => {
    history.goBack();
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const { name, username, email, company } = details;

  return (
    <>
      <h3 className="text-center">User Details</h3>
      <div className="container-fluid mb-5 mt-4">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="card text-center ">
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h5 className="card-title">{username}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <p className="card-text">Company : {company.name}</p>
                <Link onClick={btnHandler} className="card-link btn btn-danger">
                  ...Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
