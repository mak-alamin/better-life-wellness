import React from "react";
import { Accordion } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container my-5 text-center">
      <h1 className="mb-5">Blog</h1>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What is the difference between authorization and authentication ?
          </Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>Authentication</strong> is the act of validating that
              users are whom they claim to be. This is the first step in any
              security process. It verifies that an entity is who they say they
              are — whether they’re a person or a machine. It is the
              authentication of an identity.
            </p>
            <p>
              <strong>Authorization</strong> is the process of giving the user
              permission to access a specific resource or function. This is the
              process of access control or client privilege to a system.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Google Firebase offers many features to develop web development
            tools for web and mobile apps. It reduces development workload and
            time. It's a perfect prototyping tool. Firebase is simple,
            lightweight, friendly, and industrially well recognized. Other than
            firebase we can use Auth0, Okta, MongoDB, JSON Web Token etc for
            authentication.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            {" "}
            What other services does firebase provide other than authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase provides Database Management, Cloud Firestore, Cloud
            Functions, Hosting, Cloud Storage, Google Analytics, Cloud Messaging
            etc. other than authentication.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
