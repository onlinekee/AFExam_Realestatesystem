import React from "react";

import { Route } from "react-router-dom";

import Header from "../Shared/components/navigation/MainHeader";
import Footer from "../Shared/components/footer/footer";
import "../user/Admin/admin.css";

const NormalRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <div>
        <Header />
        <Component {...props} />
        <div className="cusfooter">
          <Footer />
        </div>
      </div>
    )}
  />
);

export default NormalRoute;
