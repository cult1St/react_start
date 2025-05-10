import React from 'react'
import { useState } from 'react';

const Election = () => {
    const [nextdate, setNextdate] = useState(2027);
 
    const nextElection = () => {
      var  newdate = nextdate + 4;
      setNextdate(newdate);
      //  console.log(nextdate)
       // alert("The next election will be in " + nextdate)
    }
  return (
    <div className='row'>
        <div className='col'>
        <h3>The next election will be in {nextdate}</h3> 
        <button className='btn btn-outline-primary' onClick={nextElection}>Next</button> 
        </div>
    </div>
  )
}

export default Election