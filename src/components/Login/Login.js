import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container my-5">
      <form className="mx-auto login-form card p-3">
        <h2 className="text-center mb-3">Login</h2>
        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example1">
            Email address
          </label>
          <input type="email" id="form2Example1" className="form-control" />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="form2Example2">
            Password
          </label>
          <input type="password" id="form2Example2" className="form-control" />
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label className="form-check-label" for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-4">
          Log in
        </button>

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>Or,</p>
          <button
            type="button"
            className="btn btn-light border btn-floating mx-1 mb-3"
          >
            {" "}
            <img src="./images/google.png" alt="" width={30} className="me-3" />
            Sign Up with Google
          </button>

          <button
            type="button"
            className="btn btn-light border btn-floating mx-1"
          >
            {" "}
            <img
              src="./images/facebook.png"
              alt=""
              width={30}
              className="me-3"
            />
            Sign Up with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
