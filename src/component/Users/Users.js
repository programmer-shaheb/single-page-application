import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Users</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row  gy-4">
              {users.map((user) => (
                <Card key={user.id} user={user}></Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
