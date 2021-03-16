import React, { useState, useEffect, useContext } from "react";
import fire from "./firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";

const LoginFunction = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(true);

  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const clearInput = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        setLoggedInUser(res.user);
        history.replace(from);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        setLoggedInUser(res.user);
        history.replace(from);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        setUser(res.user);
        setLoggedInUser(res.user);
        history.replace(from);
      });
  };

  const authListner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  const logOut = () => {
    fire.auth().signOut();
    setLoggedInUser("");
  };

  useEffect(() => {
    authListner();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-body">
          {loggedInUser ? (
            <>
              <h3>Log Out</h3>
              <button className="btn btn-primary w-75" onClick={logOut}>
                Log Out
              </button>
            </>
          ) : (
            <>
              <form>
                <h3>Sign Up / Log In</h3>
                <div className="form-group m-4">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    autoFocus
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && (
                    <div className="alert alert-danger mt-1" role="alert">
                      {emailError}
                    </div>
                  )}
                </div>
                <div className="form-group m-4">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    value={password}
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  {passwordError && (
                    <div className="alert alert-danger mt-1" role="alert">
                      {passwordError}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  {hasAccount ? (
                    <>
                      <button
                        className="btn btn-outline-primary w-75"
                        onClick={handleSignUp}
                      >
                        Sign Up
                      </button>
                      <button
                        className="btn btn-outline-primary w-75 mt-2"
                        onClick={handleGoogleLogin}
                      >
                        Sign Up With Google
                      </button>
                      <button
                        className="btn btn-outline-primary w-75 mt-2"
                        onClick={handleSignUp}
                      >
                        Sign Up With GitHub
                      </button>
                      <button
                        className="btn btn-outline-primary w-75 mt-2"
                        onClick={handleSignUp}
                      >
                        Sign Up With Facebook
                      </button>
                      <p>
                        Already Have An Account ?
                        <span
                          className="text-primary"
                          onClick={() => setHasAccount(!hasAccount)}
                        >
                          Log In
                        </span>
                      </p>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-outline-primary w-75"
                        onClick={handleLogIn}
                      >
                        Log In
                      </button>
                      <p>
                        Create A New Account.
                        <span
                          className="text-primary"
                          onClick={() => setHasAccount(!hasAccount)}
                        >
                          Sign Up
                        </span>
                      </p>
                    </>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginFunction;
