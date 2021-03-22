import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../auth/auth'

const Register = () => {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        password: "",
        cPass: "",
        email: "",
        gender: "",
        error: "",
        success: false
    });

    const { firstName, lastName, password, cPass, email, gender, success, error } = values;

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: false })

        if (firstName == "" || lastName == "" || password == "" || cPass == "" || email == "" | gender == "") {
            setValues({ ...values, error: "Please fill all the fields!" })
        }       
        else if (!firstName.match(/^[A-Za-z]+$/) || !lastName.match(/^[A-Za-z]+$/)) {
            setValues({ ...values, error: "You are only allowed to enter letters in First Name and Last Name!" })
        }
        else if (password != cPass) {
            setValues({ ...values, error: "Password and Confirm Password should be Same!" })
        }
        else {
            signup({ firstName, lastName, password, email, gender })
                .then(data => {
                    if (data.error) {
                        setValues({ ...values, error: data.error, success: false })
                    } else {
                        setValues({
                            ...values,
                            firstName: "",
                            lastName: "",
                            password: "",
                            cPass: "",
                            email: "",
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
            <h2><center>Create an Account</center></h2><br />
            <form>
                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>First Name </label>
                        <input onChange={handleChange("firstName")} value={firstName} type="text" className="form-control textColor" pattern = "[A-Za-z]" required />
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
                        <label>Confirm Password</label>
                        <input onChange={handleChange("cPass")} value={cPass} type="password" className="form-control" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-sm">
                        <label>E-mail</label>
                        <input onChange={handleChange("email")} value={email} type="email" className="form-control" required />
                    </div>
                    <div className="form-group col-sm">
                        <label>Gender</label>
                        <select onChange={handleChange("gender")} value={gender} className="form-control">
                            <option selected hidden>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div> <br />

                <button onClick={clickSubmit} className="btn btn-outline-warning btn-md btn-block">Join Now</button>
            </form> <br />

            <center><p>Already a Member?  <Link to="/signin">SIGN IN</Link></p></center><br />
        </div>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            <center><strong>{error}</strong></center>
        </div>
    )

const showSuccess = () => (
    <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        <center><strong>Account Created Succesfully!. Please <Link to="/signin">Signin!</Link></strong></center>      
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

export default Register;