import React from "react";
import { MDBFooter} from "mdbreact";

const AdminFooter = () => {
  return (
    <MDBFooter
      color="blue"
      className="text-center font-small bg-dark cus-page-footer"
    >
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href=""> Discover your future. Buy your Dream Home</a>
      </p>
    </MDBFooter>
  );
};

export default AdminFooter;
