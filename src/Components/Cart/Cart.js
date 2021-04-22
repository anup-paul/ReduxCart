import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../Redux/Actions/CartAction';

const Cart = (props) => {
    console.log(props)
    const {cart, removeFromCart} = props;
    return (
        <div>
            <h4 className="text-center my-5" ><b>Total Product:{cart.length}</b></h4>
            <ul >
                {
                    cart.map(item=><li className="m-3">
                        {item.name}
                        <button onClick={()=>removeFromCart(item.cartId)} className="btn btn-danger mx-2" >X</button>
                        </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart:state.cart
    }
}
const mapDispatchToProps = {
    removeFromCart:removeFromCart
 }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);