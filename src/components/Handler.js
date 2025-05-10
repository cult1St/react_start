import React from 'react'

const Handler = () => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e)
        alert("We Just Clicked a Handler")
    }
  return (
    <div>
        <button onClick={handleClick} className='btn btn-primary' >Click Me</button>
    </div>
  )
}

export default Handler