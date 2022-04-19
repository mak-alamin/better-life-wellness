import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Checkout = () => {
  const handleBooking = (e) => {
    e.preventDefault();
    toast("Thank you for the booking.");
  };

  return (
    <div className="container my-5">
      <ToastContainer></ToastContainer>
      <form onSubmit={handleBooking} className="mx-auto login-form card p-3">
        <h2 className="text-center mb-3">Check Out</h2>
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
            * Your Email
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
          <label className="form-label" htmlFor="user_phone">
            Your Phone
          </label>
          <input
            type="text"
            name="phone"
            id="user_phone"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="user_address">
            Your Address
          </label>
          <input
            type="text"
            name="address"
            id="user_address"
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Complete Booking
        </button>
      </form>
    </div>
  );
};

export default Checkout;
