import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import { isAuthenticated } from "../../auth/auth";
import { read, update, updateUser } from "../userAPI/userAPI";


const EditProfile = ({ match }) => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        error: false,
        success: false
    })

    const { token } = isAuthenticated();
    const { firstName, lastName, email, password, gender, error, success } = values;

    const init = (userId) => {
        // console.log(userId);
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true })
            }
            else {
                setValues({
                    ...values,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    gender: data.gender,
                })
            }
        })
    }

    useEffect(() => {
        init(match.params.userId);
    }, [])

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        update(match.params.userId, token, { firstName, lastName, password, email, gender }).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else if (firstName == "" || lastName == "" || gender == "") {
                setValues({ ...values, error: "Please fill all the fields!" })
            }
            else if (!firstName.match(/^[A-Za-z]+$/) || !lastName.match(/^[A-Za-z]+$/)) {
                setValues({ ...values, error: "You are only allowed to enter letters in First Name and Last Name!" })
            }
            else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        firstName: data.fName,
                        lastName: data.lName,
                        email: data.email,
                        gender: data.gender,
                        success: true
                    })
                })
            }
        })

    };

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            <center><strong>{error}</strong></center>
        </div>
    )

    const redirectUser = (success) => {
        if (success) {
            return <Redirect to="/user/profile" />
        }
    }

    const profileEdit = (firstName, lastName, email, password, gender) => (
        <div className='container-sm'>
            <h2><center>Edit Profile</center></h2><br />
            <form>
                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>First Name </label>
                        <input onChange={handleChange("firstName")} value={firstName} type="text" className="form-control textColor" />
                    </div>
                    <div className="form-group col-sm">
                        <label >Last Name</label>
                        <input onChange={handleChange("lastName")} value={lastName} type="text" className="form-control" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>Password</label>
                        <input onChange={handleChange("password")} value={password} type="password" className="form-control" />
                    </div>
                    <div className="form-group col-sm">
                        <label>Gender</label>
                        <select onChange={handleChange("gender")} value={gender} className="form-control">
                            <option defaultValue hidden>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>E-mail</label>
                        <input onChange={handleChange("email")} value={email} type="email" className="form-control" readOnly />
                    </div>
                </div> <br />

                <button onClick={clickSubmit} className="btn btn-outline-warning btn-md btn-block">Update Profile</button>
            </form> <br />

            <center><p>Go Back to <Link to="/user/profile">Profile</Link></p></center>
        </div>
    )

    return (
        <div>
            {showError()}
            {profileEdit(firstName, lastName, email, password, gender)}
            {redirectUser(success)}
        </div>
    )

}

export default EditProfile;