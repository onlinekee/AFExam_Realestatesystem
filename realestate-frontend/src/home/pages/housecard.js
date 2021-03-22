import React from "react";
import ImageDisplay from "./ImageDisplay";
import Button from "react-bootstrap/Button";

const HouseCard = ({house,id}) => {
  console.log(house._id);
  return (
    <li className="list-group-item cus-border">
      <div className="row">
      <div className="card" >
      
      <ImageDisplay
            house={house}
            id={id}
            xsize="auto"
            ysize="5rem"
          />
     
         
        
        <div class="card-title">
          <label>Name : </label> {house.name}
        </div>
        <div class="card-text">
          <label>Product ID : </label> {house._id}
        </div>
        <div class="card-text">
          <label>Price : </label> $ {house.price}
        </div>
        <div class="card-text">
          <label>Description : </label> {house.description}
        </div>
        <div class="col-3">
           <a href="#" class="btn btn-warning">Contact Us</a>
        </div>
        </div>
      </div>
    </li>
  );
};

export default HouseCard;
