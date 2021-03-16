import React from "react";

const LoginForm = (props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    hasAccount,
    setHasAccount,
    handleLogIn,
    handleSignUp,
    emailError,
    passwordError,
  } = props;

  return (
    <>
      <div class="card">
        <div class="card-body">
          <form>
            <div class="form-group m-4">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                autoFocus
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <div class="alert alert-danger mt-1" role="alert">
                  {emailError}
                </div>
              )}
            </div>
            <div class="form-group m-4">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                value={password}
                autoFocus
                onChange={(e) => setPassword(e.target.value)}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              {passwordError && (
                <div class="alert alert-danger mt-1" role="alert">
                  {passwordError}
                </div>
              )}
            </div>
            <div className="text-center">
              {hasAccount ? (
                <>
                  <button class="btn btn-primary w-75" onClick={handleSignUp}>
                    Sign Up
                  </button>
                  <p>
                    Already Have An Account ?
                    <span
                      className="text-primary"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      {" "}
                      Log In
                    </span>
                  </p>
                </>
              ) : (
                <>
                  <button class="btn btn-primary w-75" onClick={handleLogIn}>
                    Log In
                  </button>
                  <p>
                    Create A New Account.
                    <span
                      className="text-primary"
                      onClick={() => setHasAccount(!hasAccount)}
                    >
                      {" "}
                      Sign Up
                    </span>
                  </p>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
