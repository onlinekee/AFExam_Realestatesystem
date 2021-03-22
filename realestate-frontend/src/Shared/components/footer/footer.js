import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="page-footer font-small bg-dark pt-4 cusfooter">
      <div className="container-fluid text-center text-md-left footer-main">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-2">
            <div className="row">
            <div className="col-md-6">
              <h5 className="text-uppercase">Real Estate</h5>
              <p>Buy your own home.. Discover your future</p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-3 p-2 mx-2">
                <i className="fas fa-phone icon-white"></i>&nbsp;
              </div>
              <div className="col-md-3 p-2">
                <i className="fas fa-envelope icon-white"></i>&nbsp;
              </div>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-3" />

         

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">INFORMATION</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">About Us</a>
                <a href="#!">  Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="#"> {process.env.REACT_APP_COMPANY}</a>
        <a href="#">
          <i className="fab fa-facebook-f icon-white mx-3"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram icon-white mx-3"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter icon-white mx-3"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
