import React, {Component, useEffect} from 'react';
import HouseCard from "../pages/housecard";
import {getProductsForHome} from "../pages/APIhouse";

const {useState} = require("react");

const NewHouse = () => {

    const [NewArrivalsOfProducts, setNewArrivalsOfProducts] = useState([]);

    let limit = 4;

    const getNewArrivals = () => {
        getProductsForHome('createdAt', limit).then(data => {
            setNewArrivalsOfProducts(data);
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    };

    const changeLimit = () =>{
        console.log('called')
        limit = limit + 4;
    }

    useEffect(() => {
        getNewArrivals();
    },[]);

    return (
        <div>
            <div className="container-fluid">
                <h1 className="text-center">New Arrivals</h1>
            </div>
            <br/><br/>
            <div className="d-flex justify-content-around">
                <div className="row m-5">
                    {NewArrivalsOfProducts.map((product, i) => (
                        <div key={i} className="col mt-2">
                            <HouseCard Product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <br/><br/>

            

        </div>
    );

};

export default NewHouse;