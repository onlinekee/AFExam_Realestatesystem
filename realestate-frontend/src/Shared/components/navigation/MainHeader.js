import React, { Fragment,useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";

import MainNavigation from "./mainNav";

import { Link } from "react-router-dom";
import "./mainHeader.css";
import { signout, isAuthenticated } from "../../../auth/auth"

const MainHeader = () => {
  const [count,setCount] =  useState(0);
  let history = useHistory();
  const { user, token} = isAuthenticated();
  
 

  

  
  return (

    <header>
      <div className="col-md-12 navbar-dark bg-dark ">
        <div className="row container-fluid">
          <div className="col-md-12 text-right">
            <div id="ex4" className="p-1">

              {!isAuthenticated() &&

                <Fragment>
                  <a
                    style={{ textDecoration: "none" }}
                    href={"/signIn"}
                    className="text-success"
                  >
                    LOGIN
                  </a>

                  <a
                    style={{ textDecoration: "none" }}
                    href={"/signup"}
                    className="mx-3 text-warning"
                  >
                    REGISTER
                  </a>

                </Fragment>
              }

              {isAuthenticated() &&
                <Fragment>
                  Welcome&nbsp;
                  <a
                    style={{ textDecoration: "none" }}
                    href={"/user/profile"}
                    className="text-success"
                  >
                      {user.firstName}
                  </a>
                  
                  <a
                    style={{ cursor: "pointer", color: "#ffffff" }}
                    className="mx-3 text-warning"
                    onClick={() => signout(() => {
                      history.push("/");
                    })}
                  >
                    LOGOUT
                  </a>
                </Fragment>

              }

              
            </div>
          </div>
        </div>
      </div>

      <div className="my-3">
        <MainNavigation />
      </div>
    </header>
  );
};

export default withRouter(MainHeader);
