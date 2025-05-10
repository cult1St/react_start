import React from 'react'

const Tcell = ({product, key, delete_product}) => {
  return (
    <tr key={key}>
        <td>{Number(key) + 1}</td>
        <td>{product.product}</td>
        <td>₦{product.price}</td>
        <td><button onClick={() => {delete_product(product.id)}} className='btn btn-danger'>Delete</button></td>
    </tr>
  )
}

export default Tcell