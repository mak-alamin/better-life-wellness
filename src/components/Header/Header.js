import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="px-1 py-3">
        <Container>
          <Navbar.Brand>
            <Link to="/">Better Life Wellness</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/" className="px-3">
                Home
              </Link>
              <Link to="/blog" className="px-3">
                Blog
              </Link>
              <Link to="/checkout" className="px-3">
                Checkout
              </Link>
              <Link to="/about" className="px-3">
                About Me
              </Link>
              <Link to="/login" className="px-3">
                Login
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
