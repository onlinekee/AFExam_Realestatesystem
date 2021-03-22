import React, {useState, useEffect} from 'react';
import {createProduct} from '../pages/APIhouse'
import {isAuthenticated} from "../../auth/auth";

const UploadProducts = () => {

    const { user, token } = isAuthenticated();

    const [values, setValues] = useState({
        name: '',
        description: '',
        price: '',
        photo: '',
        formData:new FormData(),
        loading: false,
        error: '',
    });
    const [LoadingResult, setLoadingResult] = useState(true);

    const {
        name,
        description,
        price,
        error,
    } = values;

    
    const handleChange = name => event => {
        let value = name === 'photo' ? event.target.files[0] : event.target.value;
        if (name === 'name'){
            value = capitalize(event.target.value);
        }
        values.formData.set(name, value);
        setValues({...values, [name]: value});
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({...values, error: '', loading: true});

        console.log(user._id)
        createProduct(values.formData, token, user._id).then(data => {
            console.log(values.formData);
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                alert('Product Created Successfully!');
                setValues({
                    ...values,
                    error: '',
                    name: '',
                    description: '',
                    photo: '',
                    price: '',
                });
                window.location.assign(`${process.env.REACT_APP_CLIENT_URL}/admin/allProducts`);
            }
        }).catch(error => {
            alert('Error in Product Upload!');
            console.log(error);
        });
    };

    const displayError = () => (
        <div className="alert border-danger alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    );

    const showLoading = () => {
        return (
            LoadingResult && (
                <div className='container d-flex justify-content-center mt-5'>
                    <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        );
    };

    const capitalize = (str, lower = false) =>
        (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    ;

    return (
        <div className="container">
            {showLoading()}
            {displayError()}

            <div className="card">
                <div className="Card.Header" style={{ color: 'orange' }}>
                    You're about to Create a Product
                </div>

                <div className="p-3">
                    <form className="mb-3" onSubmit={clickSubmit}>

                        <div className="form-group">
                            <label className="text-warning">Name</label>
                            <input onChange={handleChange('name')} type="text" className="form-control" value={name}
                                   required/>
                        </div>

                        <div className="form-group">
                            <label className="text-warning">Description</label>
                            <textarea onChange={handleChange('description')} className="form-control"
                                      value={description} required/>
                        </div>

                        <div className="form-group">
                            <label className="text-warning">Price</label>
                            <input onChange={handleChange('price')} type="number" className="form-control" value={price}
                                   required/>
                        </div>

                      

                        <div className="form-group">
                            <label className="text-warning">Display Image</label><br/>
                            <label className="btn btn-secondary">
                                <input onChange={handleChange('photo')} type="file" name="photo" accept="image/*"
                                       required/>
                            </label>
                        </div>

                        <button className="btn btn-warning">Submit</button>
                    </form>
                </div>
            </div><br/>

            {displayError()}
        </div>
    );
};

export default UploadProducts;
