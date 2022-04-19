import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);

  console.log(user);
  const { displayName, email, photoURL } = user;
  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-img">
          <img src={photoURL} width="200" alt="Profile Pic Not Found" />
        </div>
        <div className="profile-nav-info">
          <h3 className="user-name">{displayName}</h3>
          <div className="address">
            <p id="state" className="state">
              Dhaka,
            </p>
            <span id="country" className="country">
              Bangladesh.
            </span>
          </div>
        </div>
      </div>

      <div className="main-bd">
        <div className="left-side">
          <div className="profile-side">
            <p className="user-mail">
              <i className="fa fa-envelope"></i> {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
