import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from './Cart/Cart';
import './Shop.css'
const Shop = () => {
    const [products, setProducts]=useState([])
    const [cart, setCart]=useState([])
    
    useEffect(()=>{
        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    // handel ti pathano hoise nicce dike 
    const handelAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shopContainer'>
            <div className='productsContainer'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        // ei khane call korte hobe 
                        handelAddToCart={handelAddToCart}
                        >
                               
                    </Product>)

                }
            </div>
            <div className='cartContainer'>
                <Cart cart={cart} ></Cart>
            </div>
            
        </div>
    );
};

export default Shop;