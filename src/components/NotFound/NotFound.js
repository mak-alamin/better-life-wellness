import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center text-center pt-5">
        <img
          src="./images/not-found-404.png"
          alt=""
          srcset=""
          style={{ width: "200px" }}
        />
        <h2>The page you requested is not found.</h2>
      </div>
    </div>
  );
};

export default NotFound;
