import React from "react";
import { Link } from 'react-router-dom';
import "../components/profileStyle.css";
import { isAuthenticated } from "../../auth/auth";

const userProfile = () => {

  const { user: { _id, firstName, lastName, email, gender, role } } = isAuthenticated();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <h4> Hi! {firstName}, Have a Good Day! </h4> <br />
           
          </div>
          <div className="col-md-6 details">
            <blockquote>
              <h5>{firstName} {lastName}</h5>
            </blockquote>
            <p> Email: {email}  </p>
            <p> Gender: {gender}  </p>
            <p> Role: {role === 1 ? "Admin" :  "Registered User"}  </p>
            <p>
              <Link className="nav-link" aria-selected="true" to={`/user/editProfile/${_id}`}>
                Edit Profile
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const userNavs = () => {

  return (

    <div className="container">
      <br /> <br />
      <ul className="nav nav-pills flex-column">

        <li className="nav-item">
          
        </li>
      </ul>
    </div>
  )

}

const purchaseHistory = () => {

}

const Profile = () => {

  return (

    <div className="row">
      <div className="col-3">
        {userNavs()}
      </div>
      <div className="col-9">
        {userProfile()}
      </div>
    </div>
  );
}

export default Profile;
