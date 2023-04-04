import React, { useState } from 'react';
import Cart from '../Shop/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart=useLoaderData()
    const [cart,setCart]=useState(savedCart)

    const handleRemoveFromCart=(id)=>{
        const remaining=cart.filter(product=> product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    // console.log(savedCart);
    return (
        <div className='shopContainer'>
           <div className='review-container'>
            {
                cart.map(product=><ReviewItem
                product={product}
                key={product.id}
                handleRemoveFromCart={handleRemoveFromCart}
                
                
                ></ReviewItem>)
            }
           </div>
           <div className='cartContainer'>
            <Cart cart={cart}></Cart>

           </div>
            
        </div>
    );
};

export default Orders;