import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-3 text-center">About Me</h1>

      <div className="row">
        <p className="text-center">
          <img
            src="./images/mak-alamin-web-developer.png"
            alt=""
            style={{ width: "200px", height: "auto" }}
          />
        </p>
        <p className="w-75 mx-auto">
          Hi, I'm Mak Alamin. I'm a full stack web developer, working with
          ReactJS, NodeJS, Express, MongoDB, Firebase and more. I'm a
          self-taught developer, and I'm always looking for new challenges to
          learn and grow. I'm in a great mission to be a world class full stack
          web developer. I want to connect and learn from the best and the
          brightest people from the global community. I'm currently in search of
          a position to work with great companies and people worldwide.
        </p>
      </div>
    </div>
  );
};

export default About;
