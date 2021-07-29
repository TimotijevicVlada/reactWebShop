import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {
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
                                <div><span>3</span></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;
