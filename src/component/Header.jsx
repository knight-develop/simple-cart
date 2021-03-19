import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Menu from './svg/bars-solid.svg';
import Close from './svg/times-solid.svg';
import Cart from './svg/shopping-cart-solid.svg';
import { Link } from 'react-router-dom';
import './css/Header.css'
import { ProductContext } from './Context';
Header.propTypes = {

};
function display(auth) {
    return ({
        display: auth ? "inline-block" : "none"
    })
}
function Header(props) {
    const [categories, setCateID, products, search, setSearch, onHandleSearch, cateID, setProducts, clicked, setClicked, auth, setAuth, addCart, cart, setCart] = useContext(ProductContext);
    console.log(cart.length);
    return (
        <header>
            <div className="logo">
                <h1><Link to="/">My Shop</Link></h1>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li style={display(auth)}><Link to="/crud-product">ADD Product</Link></li>
                    <li ><Link to="/login">Login/Register</Link></li>
                </ul>
                <div className="nav-cart">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="20" />
                    </Link>
                </div>

            </nav>
        </header>

    );
}

export default Header;