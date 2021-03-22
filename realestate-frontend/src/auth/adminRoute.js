import React from "react";
import { isAuthenticated } from "./auth";
import { Route, Redirect } from "react-router-dom";
import Footer from "../Shared/components/footer/footer";
import TopNavigationBar from "../Shared/components/admin/topNavigationBar";
import "../user/Admin/admin.css";

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() && isAuthenticated().user.role === 1 ? (
        <div>
          <div className="flexible-content">
            <TopNavigationBar />
           
            <main id="content" className="p-5">
              <Component {...props} />
            </main>
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

export default AdminRoute;
