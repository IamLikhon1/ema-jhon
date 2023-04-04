import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const Cart = ({cart,handleClearCart,children}) => {
    // const {cart}=props;

    let total=0;
    let totalShipping=0;
    let quantity=0;
    for(const product of cart){
        product.quantity= product.quantity||1;
        total=total+product.price * product.quantity
        totalShipping=totalShipping+product.shipping
        quantity=quantity+product.quantity
    }
    let tax=total*7/100;
    const grandTotal=tax+total+totalShipping
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Items:{quantity}</p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping Price: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)} </p>
                <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span>Clear Cart</span>
            <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    {children}
        </div>
    );
};

export default Cart;