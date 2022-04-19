import React from "react";

const TheCoach = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-3 text-center">I'm your Trainer</h1>

      <div className="row">
        <p className="text-center">
          <img
            src="./images/trainer.jpg"
            alt="" className="rounded border"
            style={{ width: "300px", height: "auto" }}
          />
        </p>
        <p className="w-75 mx-auto">
          I am John Doe, your personal trainer who gets results despite of my
          client’s limitations. I am the cure for time wasting; I am in love
          with effectiveness and efficiency. Through years of studying, coaching
          and self-experimentation, I have developed protocols that make average
          busy people into lean, strong, and healthy people. I help people use
          their full potential, regardless of experience, time, or present
          fitness level. My job is to listen, help, sympathize, empathize, and
          be your cheerleader and drill sergeant. My job is to be the impartial
          and unbiased point-of-view that will help you make the right
          decisions. Your starting point is irrelevant for me: from absolute
          beginner to athlete, young and old, thin or heavy. I have worked with
          all types of clients. If you want to look, feel, and perform better, I
          am your trainer.
        </p>
      </div>
    </div>
  );
};

export default TheCoach;
