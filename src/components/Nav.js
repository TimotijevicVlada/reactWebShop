import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav = () => {

    const {totalQuantity} = useSelector(state => state.CartReducer);
    const [nav, setNav] = useState(false);

    return (
        <div className="navbar">
            <div className="container">
                <div className="nav_container">
                    <i onClick={() => setNav(!nav)} className="fas fa-bars"></i>
                    <div className={nav ? "nav_left nav_visible" : "nav_left"}>
                        <div className="exit_btn"><i onClick={() => setNav(false)} className="fas fa-times"></i></div>
                        <Link to="/"><h2 onClick={() => setNav(false)}>Home</h2></Link>
                        <Link to="/contact"><h2 onClick={() => setNav(false)}>Contact</h2></Link>
                        <Link to="/about"><h2 onClick={() => setNav(false)}>About</h2></Link>
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
