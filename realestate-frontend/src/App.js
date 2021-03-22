import React from "react";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Login from "./user/pages/Login";
import Register from "./user/pages/Register";
import Profile from "./user/pages/Profile";
import EditProfile from "./user/pages/EditProfile"
import UploadProducts from "./home/components/uploadHouse";
import AllHouseProjects from "./home/pages/AllHouseProjects";



import Home from "./home/pages/home";

import PrivateRoute from "./auth/PrivateRoute";
import AdminRoute from "./auth/adminRoute";
import NormalRoute from "./auth/NormalRoute";


const App = () => {
  return (
    <div className="main-container">
      <div>
        <BrowserRouter>
          <Switch>
            <NormalRoute path="/" exact component={Home} />
            <NormalRoute path="/signin" exact component={Login} />
            <NormalRoute path="/signup" exact component={Register} />

            <NormalRoute path="/allHouseProducts" exact component={AllHouseProjects} />             
           

            {/* PRODUCTS AND CATEGORIES */}

            {/* <NormalRoute path="/allProducts" exact component={AllProducts} />              */}
                         
            {/* <NormalRoute path="/products/:id" exact component={SingleIProductDetails} /> */}
              
            {/* PRODUCTS AND CATEGORIES */}

            {/* private routes */}

            <PrivateRoute path="/user/profile" exact component={Profile} />
            <PrivateRoute path="/user/editProfile/:userId" exact component={EditProfile}/>
            

            {/* admin routes */}
        
            <AdminRoute path="/admin/user/profile" exact component={Profile}/>           
            <AdminRoute path="/admin/addProduct" exact component={UploadProducts} />


            {/* PRODUCTS AND CATEGORIES */}
            
            {/* <AdminRoute path="/addCategory" exact component={UploadCategories}/>
            <AdminRoute path="/uploadMultiple" exact component={UploadProductsMultiple} /> */}

            
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
