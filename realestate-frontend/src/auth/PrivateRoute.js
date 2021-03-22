import React from "react";
import { isAuthenticated } from "./auth";
import { Route, Redirect } from "react-router-dom";
import Header from "../Shared/components/navigation/MainHeader";
import Footer from "../Shared/components/footer/footer";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <div>
          <Header />
          <Component {...props} />
          <div className="cusfooter">
            <Footer />
          </div>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/signIn",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
