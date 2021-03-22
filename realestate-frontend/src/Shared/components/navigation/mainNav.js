import React, {Fragment} from "react";
import logo from "../../assets/logoImage/logo.png";

import "./mainNav.css";
import { isAuthenticated } from "../../../auth/auth"

const MainNavigation = props => {

  return (
    <nav className="navbar navbar-expand-lg  topnav">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="/">
        <img src={logo} className="logo"></img>
      </a>

      <div className="collapse navbar-collapse" id="navbarToggler">
        
        <div>

          {isAuthenticated() && (isAuthenticated().user.role === 0 || isAuthenticated().user.role === 1 || isAuthenticated().user.role === 2 ) &&
            <Fragment>
              <a
                className="nav-link"
                id="navbarDropdownMenuLink-4"
                aria-haspopup="true"
                aria-expanded="false"
                href="/user/profile"
              >
                <i className="fas fa-user"></i> Profile
          </a>
            </Fragment>
          }

          {isAuthenticated() && (isAuthenticated().user.role === 1 || isAuthenticated().user.role === 2 || isAuthenticated().user.role === 0) &&
            <Fragment>
              <a
                className="nav-link"
                id="navbarDropdownMenuLink-4"
                aria-haspopup="true"
                aria-expanded="false"
                href="/admin/dashboard"
              >
                <i className="fas fa-user"></i> Home
          </a>
            </Fragment>
          }






        </div>
      </div>

    </nav>
  );
};

export default MainNavigation;
