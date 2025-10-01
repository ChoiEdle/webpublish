import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "../../feature/auth/authAPI.js";


export function Header() {
    const dispatch = useDispatch();
    const cartCount = useSelector((state)=>state.cart.cartCount);
    const isLogin = useSelector((state)=>state.auth.isLogin);

    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy-redux-self</span>
                </Link>
                <nav className="header-right">
                    <Link to="/all">Products</Link>
                    <Link to="/cart" className="header-icons-cart-link">
                        <GiShoppingCart className="header-icons" />
                        <span className="header-icons-cart">{cartCount}</span>
                    </Link>
                    {isLogin ?
                        <>
                            <button type="button" onClick={()=>{dispatch(handleLogout())}}>Logout</button>
                            <Link to="/support">
                                <button type="button">Support</button>
                            </Link>
                        </>
                    :
                        <>
                            <Link to="/login">
                                <button type="button">Login</button>
                            </Link>
                            <Link to="/signup">
                                <button type="button">Signup</button>
                            </Link>
                        </>
                    }
                </nav>
            </div>
        </div>
    );
}