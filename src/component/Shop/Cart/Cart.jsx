import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;

    let total=0;
    let totalShipping=0;
    for(const product of cart){
        total=total+product.price
        totalShipping=totalShipping+product.shipping
    }
    let tax=total*7/100;
    const grandTotal=tax+total+totalShipping
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
                <p>Selected Items:{cart.length}</p>
                <p>Total Price: ${total} </p>
                <p>Total Shipping Price: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)} </p>
                <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;