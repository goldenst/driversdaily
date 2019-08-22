import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";
import CallContext from "../../context/calls/CallContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const callContext = useContext(CallContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearCalls } = callContext;

  const onLogout = () => {
    logout();
    clearCalls();
  };

  

  const authLinks = (
    <Fragment>
      <li>Welcome: {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" /> Logout{" "}
          <span className="hide-sm" />
        </a>
      </li>
      
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Driver Log",
  icon: "fas fa-shipping-fast"
};

export default Navbar;
