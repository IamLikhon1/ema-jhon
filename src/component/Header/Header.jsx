import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    // console.log(user);
    const handleLogOut=()=>{
        logOut()
        .then(result=>{

        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className='header'>
                <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='text-white'>Welcome{user.email} <button onClick={handleLogOut}>Log Out</button> </span>
                }
            </div>
        </div>
    );
};

export default Header;