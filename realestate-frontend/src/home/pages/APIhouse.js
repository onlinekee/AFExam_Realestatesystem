import React from "react";
import { API } from "../../config";

export const createProduct = (product, token, userId) => {
    console.log(product);
    return fetch(`${API}/HouseProduct/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product
    }).then(response => {
            return response.json();
            console.log(response.json());
        })
        .catch(err => {
            console.log('error in product creation',err);
            alert(err);
        });
};

export const getProductsForHome = (sortBy,limit) => {
    return fetch(`${API}/houseProducts/withFilter?sortBy=${sortBy}&order=desc&limit=${limit}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};




// export const getProductsForHome = (sortBy,limit) => {
//     return fetch(`${process.env.REACT_APP_APIURL}/HouseProduct/product/`, {
//         method: "GET"
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };




// export const getSingleProduct = productId => {
//     return fetch(`${process.env.REACT_APP_APIURL}/productsRouter/product/${productId}`, {
//         method: 'GET'
//     })
//         .then(response => {
//             //console.log(response)
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };



export const getProduct = productId => {
    return fetch(`${process.env.REACT_APP_APIURL}/productsRouter/product/${productId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    console.log(filters)
    return fetch(`${process.env.REACT_APP_APIURL}/productsRouter/products/withFilter`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getProductsByAdmin = (skip, limit, token, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };

    console.log(token)
    return fetch(`${process.env.REACT_APP_APIURL}/productsRouter/products/productsByAdmin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

