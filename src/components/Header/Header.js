import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const handleLogOut = (event) => {
    event.preventDefault();
    signOut(auth);
    navigate("/login");
  };
  return (
    <header>
      <Navbar bg="light" expand="lg" className="px-1 py-3">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">Better Life Wellness</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to="/" className="px-3" activeclassname="active">
                Home
              </NavLink>
              <NavLink to="/blog" className="px-3" activeclassname="active">
                Blog
              </NavLink>
              <NavLink to="/checkout" className="px-3" activeclassname="active">
                Checkout
              </NavLink>
              <NavLink to="/about" className="px-3" activeclassname="active">
                About Me
              </NavLink>

              {user && (
                <NavLink
                  to="/profile"
                  className="px-3"
                  activeclassname="active"
                >
                  My Account
                </NavLink>
              )}

              {user ? (
                <a
                  href="#!"
                  onClick={handleLogOut}
                  className="px-3"
                  activeclassname="active"
                >
                  Log out
                </a>
              ) : (
                <NavLink to="login" className="px-3" activeclassname="active">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
