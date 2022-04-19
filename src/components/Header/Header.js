import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = (event) => {
    event.preventDefault();
    signOut(auth);
  };
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

              {user && (
                <Link to="/profile" className="px-3">
                  My Account
                </Link>
              )}

              {user ? (
                <a href="#" onClick={handleLogOut} className="px-3">
                  Log out
                </a>
              ) : (
                <Link to="login">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
