import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Tcell from './components/Tcell';

const Classwork2 = () => {

    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        product: "",
        price: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length + 1,
            product: formData.product,
            price: formData.price
        }
        console.log(newProduct, products);
        setProducts([...products, newProduct]);
        console.log(products)
        setFormData({
            product: "",
            price: ""
        });
    }
    const delete_product = (id) => {
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
    }
    const delete_product2 = (key) => {
        const newProducts = products.splice(key, 1);
        setProducts(newProducts);
    }
  return (
    <div className='container'>
        <div className='row'>
            <p>Add product and prices to the table</p>
            <div className='col'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {products && products.map((product, index) => {
                         return (
                            <Tcell 
                                key={index} 
                                product={product} 
                                delete_product={delete_product} 
                            />
                        );
                       })}
                        
                    </tbody>
                </table>
            </div>
        </div>
        <div className='row'>
            <form onSubmit={handleSubmit} className='col'>
                <div className='form-group'>
                    <label htmlFor="product">Product Name</label>
                    <input name='product' value={formData.product} onChange={handleChange} type="text" className='form-control' id='product' placeholder='Enter product name' />
                </div>
                <div className='form-group'>
                    <label htmlFor="price">Product Price</label>
                    <input name='price' value={formData.price} onChange={handleChange} type="number" className='form-control' id='price' placeholder='Enter product price' />
                </div>
                <button type='submit' className='btn btn-primary'>Add Product</button>
            </form>

        </div>
    </div>
  )
}

export default Classwork2