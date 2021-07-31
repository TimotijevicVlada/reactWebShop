import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav = () => {
    const {totalQuantity} = useSelector(state => state.CartReducer);
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav_container">
                    <div className="nav_left">
                        <Link to="/"><h2>Home</h2></Link>
                    </div>
                    <div className="nav_right">
                        <Link to="/cart">
                            <div className="basket">
                                <i className="fas fa-shopping-bag cart-icon"></i>
                                <div><span>{totalQuantity}</span></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
