 const Products = ({products}) => {

    return (
    <div className="row bg-warning p-5 justify-content-center">
      <h1 className="text-center">Products</h1>
       {products.map((product, index) => (
          <div className="col-md-4 bg-primary" key={index}>
            <h3>{product.product}</h3>
            <p> ₦ {product.price}</p>
          </div>
         )
      )
      }
    </div>
    )
 }

 export default Products;