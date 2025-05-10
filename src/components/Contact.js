import React, {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Contact = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        message:""
    });

    const [message, setMessage] = useState({type:"", message:""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch("https://momoduwealth.com.ng/api/users/message", {
            method:"post",
            body: JSON.stringify(formData),
            headers:{
                "Content-type" : "application/json"
            }
        })

        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if(data.status === true){
                setMessage({type:"success", message: data.message})
                setFormData({ name:"",
                    email:"",
                    phone:"",
                    message:""})
            }else{
                setMessage({...message, type:"error", message: [data.errors]})
                console.log(message)
            }
        })
    }
    return (
        <div className="container bg-warning">
            <div className="row justify-content-center bg-light mt-2">
                <div className="col-md-6 card mt-5 p-3">
                    <form action="" onSubmit={handleSubmit}>
                        <h3 className="card-header text-warning text-center">Contact Form</h3>
                        {message.type.length > 0 ?
                        <div className={`alert  alert-dismissible fade show ${message.type === "success" ?  "alert-success" : "alert-danger"}`} role="alert">
                            <strong>{message.type.toUpperCase()}</strong> {
                               
                                <p>{message.message}</p>
                            
                            }
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="alert"
                                aria-label="Close"
                            />
                            </div> : ""
}
                        <div className='card-body'>
                        <div className="form-floating mb-1">
                            <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                            <label htmlFor="name">Name</label>
                        </div>
                       
                        {/* Email field */}
                        <div className="form-floating mb-1">
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email} onChange={handleChange}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                  
                        {/* Phone Number */}
                        <div className="form-floating mb-1">
                            <input
                                className="form-control"
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone} onChange={handleChange}
                            />
                            <label htmlFor="number">Phone Number</label>
                        </div>
                     
                        {/* Message field */}
                        <div className="form-floating mb-1">
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                defaultValue={""}
                                value={formData.message} onChange={handleChange}
                            />
                            <label htmlFor="message">Message</label>
                        </div>
                   
                        </div>
                        {/* Submit button */}
                        <div className="card-footer form-floating">
                            <button type="submit" className="btn btn-primary">

                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Contact