import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    useEffect(()=>{
        const storeCart=getShoppingCart()
        const savedCart=[]
        for (const id in storeCart){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){

                const quantity=storeCart[id]
                addedProduct.quantity=quantity
                savedCart.push(addedProduct)
            }
            console.log(addedProduct);

        }
        setCart(savedCart)
    },[products])
    // handel ti pathano hoise nicce dike 
    const handelAddToCart=(product)=>{
        // console.log(product);
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
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