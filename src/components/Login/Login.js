import axios from "axios";
import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

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
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);

    const { data } = await axios.post("http://localhost:5000/login", { email });

    console.log(data);

    localStorage.setItem("accessToken", data.accessToken);

    navigate(from, { replace: true });
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Password reset link has been sent to your email");
    } else {
      toast("Please enter your email address first");
    }
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
          <a href="#!" onClick={resetPassword}>
            Forgot password?
          </a>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Log in
        </button>

        {loading || sending ? <Loading></Loading> : ""}

        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <SocialLogin></SocialLogin>
          <ToastContainer></ToastContainer>
        </div>
      </form>
    </div>
  );
};

export default Login;
