import React, { useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirm, setConfirm] = useState("");
    const submitForm = (e) => {
        e.preventDefault();
        const formData = {
            username, password, confirm
        };
        console.log(formData);
    }
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-8">
                    <form onSubmit={submitForm} className="border border-2 p-4 rounded shadow">
                        <h4 style={{ textAlign: "center" }}>User Registration Forms</h4>
                        <p>All fields required</p>
                       
                        <div className="form-floating">
                            <input

                                type="text"

                                id="username"

                                className="form-control"

                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}

                                placeholder="Enter Username"

                            />
                            <label htmlFor="#">Enter Username</label>
                        </div>
                        <p id="user" style={{ color: "red" }} />
                       
                        <div className="form-floating">
                            <input

                                type="password"

                                id="password"

                                className="form-control"

                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                                placeholder="Enter password"

                            />
                            <label htmlFor="#">Enter Password</label>
                        </div>
                        <p id="pass" style={{ color: "red" }} />
                       
                        <div className="form-floating">
                            <input

type="password"


                                id="confirm"

                                className="form-control"

                                name="confirm"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}

                                placeholder="Confirm password"

                            />
                            <label htmlFor="#">Confirm Password</label>
                        </div>
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

export default Register