import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(true);
  const [passError, setPassError] = useState("");
  const [passMatchError, setPassMatchError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  if (user) {
    console.log("User: ", user);
  }

  const clearMessages = () => {
    setPassError("");
    setPassMatchError("");
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    clearMessages();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirm_password = event.target.confirm_password.value;

    if (password.length < 6) {
      setPassError("Password length should be 6 or greater");
      return;
    }

    if (password !== confirm_password) {
      setPassMatchError("Password doesn't match!");
      return;
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    navigate("/profile");
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleRegister} className="mx-auto login-form card p-3">
        <h2 className="text-center mb-3">Register</h2>
        {error ? <p className="text-danger">Error: {error?.message}</p> : ""}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="user_name">
            * Your Name
          </label>
          <input
            type="text"
            name="name"
            id="user_name"
            className="form-control"
            required
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="user_email">
            * Email address
          </label>
          <input
            type="email"
            name="email"
            id="user_email"
            className="form-control"
            required
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="user_pass">
            * Password
          </label>
          <input
            type="password"
            name="password"
            id="user_pass"
            className="form-control"
            required
          />
          <p className="text-danger">{passError}</p>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="confirm_user_pass">
            * Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            id="confirm_user_pass"
            className="form-control"
            required
          />
          <p className="text-danger">{passMatchError}</p>
        </div>

        <div className="form-outline mb-4">
          <input
            onClick={() => setAgree(!agree)}
            onChange={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
            checked={agree}
          />

          <label
            className={`ps-2 ${agree ? "" : "text-danger"}`}
            htmlFor="terms"
          >
            I accept Better Life Wellness terms and conditions
          </label>
        </div>

        <button
          type="submit"
          disabled={!agree}
          className="btn btn-primary btn-block mb-4"
        >
          Register
        </button>

        {loading || updating ? <Loading></Loading> : ""}

        <div className="text-center">
          <p>
            Already a member? <Link to="/login">Login</Link>
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

export default Register;
