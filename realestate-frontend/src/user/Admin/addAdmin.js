import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../auth/auth'

const addAdmin = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        role: 1,
        error: "",
        success: false
    });

    const { firstName, lastName, email, password, gender, role, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })

        if (firstName == "" || lastName == "" || password == "" || email == "" | gender == "") {
            setValues({ ...values, error: "Please fill all the fields!" })
        }
        else if (!firstName.match(/^[A-Za-z]+$/) || !lastName.match(/^[A-Za-z]+$/)) {
            setValues({ ...values, error: "You are only allowed to enter letters in First Name and Last Name!" })
        }
        else {
                signup({ firstName, lastName, email,password, gender, role })
                .then(data => {
                    if (data.error) {
                        setValues({ ...values, error: data.error, success: false })
                    } else {
                        setValues({
                            ...values,
                            firstName: "",
                            lastName: "",
                            email: "",
                            password: "",
                            gender: "",
                            error: "",
                            success: true
                        })
                    }
                })
        }


    };

    const signUpForm = () => (
        <div className='container-sm'>
            <h2><center>Add New Admin</center></h2><br />
            <form>
                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>First Name </label>
                        <input onChange={handleChange("firstName")} value={firstName} type="text" className="form-control textColor" required />
                    </div>
                    <div className="form-group col-sm">
                        <label >Last Name</label>
                        <input onChange={handleChange("lastName")} value={lastName} type="text" className="form-control" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>Password</label>
                        <input onChange={handleChange("password")} value={password} type="password" className="form-control" required />
                    </div>
                    <div className="form-group col-sm">
                        <label>Gender</label>
                        <select onChange={handleChange("gender")} value={gender} className="form-control">
                            <option defaultValue hidden>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>E-mail</label>
                        <input onChange={handleChange("email")} value={email} type="email" className="form-control" required />
                    </div>
                </div> <br />

                <button onClick={clickSubmit} className="btn btn-outline-warning btn-md btn-block">Add Admin</button>
            </form> <br />

            <center><p>Go Back to <Link to="/admin/dashboard">Dashboard</Link></p></center>
        </div>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            <center><strong>{error}</strong></center>
        </div>
    )

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <center><strong>Admin Added Succesfully! Back to <Link to="/admin/dashboard">Dashboard</Link></strong></center>
        </div>
    )

    return (
        <div>
            {showSuccess()}
            {showError()}
            {signUpForm()}
        </div>
    );
}

export default addAdmin;