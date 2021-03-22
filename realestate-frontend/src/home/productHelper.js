import { API } from "../config";

export const getFilteredProducts = (skip, limit) => {
    const data = {
        limit,
        skip
    };

    return fetch(`${API}/houseProducts/withFilter`, {
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