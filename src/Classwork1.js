import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
const Classwork1 = () => {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const handleInput = (e) => {
        var value = e.target.value;
        setInput(value);
        if(isNaN(value)){
            alert("It Is Not A Number")
            setError(true)
            setErrorMessage("It Is Not A Number")
        }else{
            setError(false)
        }
    }
  return (
    <div className="container">
  <div className="row">
    {error && <div className='col-12 alert alert-danger alert-dismissible'> {errorMessage}</div>}
    <div className="col-md-4">
      <label htmlFor="">Input </label>
      <input type="text" value={input} onChange={handleInput} name="input" className="form-control" />
    </div>
    <div className="col-md-4">
     <span>You Inputed: {input}</span>
     </div>
  </div>
</div>

  )
}

export default Classwork1