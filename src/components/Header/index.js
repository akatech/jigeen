import React from "react";
import { connect } from "react-redux";
import { auth } from "./../../firebase/utils";
import "./styles.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Jigeen" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/dashboard">My account </Link>
              </li>
              <li>
                <span onClick={() => auth.signOut()}>Logout</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              
              <li>
                <Link to="/registration">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

export default connect(mapStateToProps, null)(Header);
