import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorElement;

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate("/home");
  }

  return (
    <>
      <p>Or,</p>
      {errorElement}
      <button
        type="button"
        className="btn btn-light border btn-floating mx-1 mb-3"
        onClick={() => signInWithGoogle()}
      >
        {" "}
        <img src="./images/google.png" alt="" width={30} className="me-3" />
        Continue with Google
      </button>
      {loading && <Loading></Loading>}
    </>
  );
};

export default SocialLogin;
