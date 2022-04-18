import React from "react";

const Banner = () => {
  return (
    <div
      className="banner p-5 d-flex align-items-center"
      style={{
        backgroundImage: 'url("./images/banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="row">
        <div className="col-md-6 text-white">
          <h1>TURN BACK THE CLOCK LOOK, FEEL, AND PERFORM BETTER NOW!</h1>
          <p>
            Go from busy to fit, tired to healthy, and stressed to strong, while
            eating great food. Safe and effective bespoke programs for the
            committed person.
          </p>
          <a href="#services" className="btn btn-info">
            Start Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
