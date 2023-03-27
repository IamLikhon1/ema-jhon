import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const {name,category,price,img,ratings,ratingsCount,seller}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='productInfo'>
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} Star</p>
            </div>
            <button className='cartAdd'>Add To Cart</button>
        </div>
    );
};

export default Product;