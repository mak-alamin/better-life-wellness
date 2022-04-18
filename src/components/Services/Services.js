import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-5 mb-3 text-center">My Services</h2>
        <div class="col-md-4 card">
          <img src="./images/2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">FAT BURNING PRO</h5>
            <p class="card-text">
              Get started to burn yor fat. Get a slim and healthy body.
            </p>

            <Link to="/checkout" class="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
        <div class="col-md-4 card">
          <img src="./images/3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">WOMEN STRENGTH TRAINING</h5>
            <p class="card-text">
              Design for women strength building. Get started to acheive the
              ultimate result.
            </p>

            <Link to="/checkout" class="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
        <div class="col-md-4 card">
          <img src="./images/1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">MUSCLE BUILD PRO</h5>
            <p class="card-text">
              Get Bigger and Strong Muscle. This course is designed for Men.
            </p>

            <Link to="/checkout" class="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
