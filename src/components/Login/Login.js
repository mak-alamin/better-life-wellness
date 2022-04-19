import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  if (user) {
    console.log(user);

    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="container my-5">
      <form className="mx-auto login-form card p-3" onSubmit={handleSubmit}>
        <h2 className="text-center mb-3">Login</h2>

        {errorElement}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
          <input
            type="email"
            ref={emailRef}
            id="form2Example1"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            id="form2Example2"
            className="form-control"
          />
          <a href="#!">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Log in
        </button>

        {loading || sending ? <Loading></Loading> : ""}

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
            Continue with Google
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
            Continue with Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
