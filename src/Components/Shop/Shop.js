import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Actions/CartAction';
import Product from '../Products/Product';


// const products = [
   
// ]

const Shop = (props) => {
    // console.log(props);
    const {addToCart, products} = props;
    return (
        <div className="m-5">
            {
               products.map(pd=><Product

                    key={pd.id}
                    product={pd}
                    addToCart={addToCart}

                ></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart:state.cart,
        products:state.products
    }
}

const mapDispatchToProps = {
   addToCart:addToCart
}

export default connect(mapStateToProps, mapDispatchToProps) (Shop) ;