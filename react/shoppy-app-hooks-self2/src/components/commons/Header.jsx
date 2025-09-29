import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../Context/CartContext.js";
import { AuthContext } from "../../Context/AuthContext.js";
import { useAuth } from "../../hooks/useAuth.js";


export function Header() {
    const {isLogin} = useContext(AuthContext);
    const {cartCount} = useContext(CartContext);
    const {handleLogout} = useAuth();
    
    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy-hooks-self2</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className="header-icons" />
                        <span className="header-icons-cart">{cartCount}</span>
                    </Link>
                    {
                        !isLogin && <>
                    <Link to="/login">
                        <button type="button">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button type="button">Signup</button>
                    </Link>
                        </>
                    }
                    {isLogin && <button type="button" onClick={handleLogout}>Logout</button>}
                    <Link to="/support">
                        <button type="button">Support</button>
                    </Link>
                </nav>
            </div>
        </div>
    );
}