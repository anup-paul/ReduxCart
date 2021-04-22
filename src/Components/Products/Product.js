import React from 'react';

const Product = (props) => {

    const {addToCart, product} = props

    return (
        <div className="mt-5 p-5" style={{border:"2px solid gray"}} >
            <h5>{product.name}</h5>
            <button onClick={()=>addToCart(product.id, product.name)}  className="btn btn-primary" >Add to Cart</button>
        </div>
    );
};

export default Product;