import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {name,price,img,ratings,seller}=props.product
    // ei khane read kore patha te hobe 
    const handelAddToCart=props.handelAddToCart

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='productInfo'>
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings} Star</p>
            </div>
            <button onClick={()=>handelAddToCart(props.product)} 
            className='cartAdd'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;