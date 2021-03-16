import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { userContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [logggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        logggedInUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/contact",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
