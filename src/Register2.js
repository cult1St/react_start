import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Register2 = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });
    const handleChange = (e) => {
        var { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} className="border border-2 p-4 rounded shadow">
                        <h4 style={{ textAlign: "center" }}>User Registration Forms</h4>
                        <p>All fields required</p>

                        <div className="form-floating">
                            <input

                                type="text"

                                id="username"

                                className="form-control"

                                name="username"
                                value={formData.username}
                                onChange={handleChange}

                                placeholder="Enter Username"

                            />
                            <label htmlFor="#">Enter Username</label>
                        </div>
                        <p id="user" style={{ color: "red" }} />

                        <div className="form-floating">
                            <input

                                type="email"


                                id="email"

                                className="form-control"

                                name="email"
                                value={formData.email}
                                onChange={handleChange}

                                placeholder="Enter email"

                            />
                            <label htmlFor="#">Email</label>
                        </div>

                        <div className="form-floating">
                            <input

                                type="password"

                                id="password"

                                className="form-control"

                                name="password"
                                value={formData.password}
                                onChange={handleChange}

                                placeholder="Enter password"

                            />
                            <label htmlFor="#">Enter Password</label>
                        </div>
                        <p id="pass" style={{ color: "red" }} />


                        <p id="conf" style={{ color: "red" }} />
                        <button
                            type="submit"
                            className="btn btn-primary col-12 mt-2"

                            id="confirm_button"
                        >

                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Register2