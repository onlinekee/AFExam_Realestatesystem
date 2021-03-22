import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

import { signout, isAuthenticated } from "../../../auth/auth";

const TopNavigationBar = () => {
  let history = useHistory();

  return (
    <div>
      <div className="col-md-12 navbar-dark bg-dark text-light p-2">
        <div className="row container-fluid">
          <div className="col-md-12 text-right">
            <div id="ex4" className="p-1">
              {!isAuthenticated() && (
                <Fragment>
                  <a
                    style={{ textDecoration: "none" }}
                    href={"/signIn"}
                    className="text-success"
                  >
                    <span>LOGIN</span>
                  </a>

                  <a
                    style={{ textDecoration: "none" }}
                    href={"/signup"}
                    className="mx-3 text-warning"
                  >
                    REGISTER
                  </a>
                </Fragment>
              )}

              {isAuthenticated() && (

                <Fragment>
                  Welcome&nbsp;
                  <a
                    style={{ textDecoration: "none" }}
                    href={"/user/profile"}
                    className="text-success"
                  >
                    {isAuthenticated().user.fName}&nbsp;
                  </a>
                  <button className="btn btn-sm btn-outline-warning" onClick={() =>
                    signout(() => {
                      history.push("/");
                    })
                  }>
                    LOGOUT</button>
                </Fragment>
              )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
