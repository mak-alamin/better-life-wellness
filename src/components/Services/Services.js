import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container" id="services">
      <h2 className="mt-5 mb-3 text-center">Services I Provide</h2>
      <div className="row">
        <div className="col-md-4 card">
          <img src="./images/2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">FAT BURNING PRO</h5>
            <p className="card-text">
              Get started to burn your fat. Get a slim and healthy body.
            </p>
            <p className="card-text">
              <strong>Price: $50/month</strong>
            </p>

            <Link to="/checkout" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-md-4 card">
          <img src="./images/3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">WOMEN STRENGTH TRAINING</h5>
            <p className="card-text">
              Design for women strength building. Get started to acheive the
              ultimate result.
            </p>

            <p className="card-text">
              <strong>Price: $80/month</strong>
            </p>

            <Link to="/checkout" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
        <div className="col-md-4 card">
          <img src="./images/1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">MUSCLE BUILD PRO</h5>
            <p className="card-text">
              Get Bigger and Strong Muscle. This course is designed for Men.
            </p>

            <p className="card-text">
              <strong>Price: $90/month</strong>
            </p>

            <Link to="/checkout" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
