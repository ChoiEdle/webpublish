import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './pages/Layout.jsx';
import { Products } from './pages/Products.jsx';
import { Home } from './pages/Home.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Cart } from './pages/Cart.jsx';
import { ProductDetail } from './pages/ProductDetail.jsx';
import { cartItemsCheck, updateCartItemsQty } from './utils/cart.js'
import './styles/cgvSignup.css';
import './styles/cgv.css';
import './styles/cgvCommons.css';
import './styles/shoppy.css';

export default function App() {
  //1. 장바구니 수량 관리 : setCartCount
  const [cartCount, setCartCount] = useState(0);

  //2. 장바구니 아이템 관리
  const [cartItems, setCartItems] = useState([]);

  const addCart = (cartItem) => {
    setCartItems(cartItemsCheck(cartItems, cartItem));
    setCartCount(cartCount + 1);
  }

  const updateCart = (cid, type) => {
    if(type===undefined){
      //삭제
      const findItem = cartItems.find(cart => cart.cid === cid);
      setCartCount(cartCount-findItem.qty);
      setCartItems((cartItems) => 
          cartItems.filter(item => !(item.cid === cid))
      );
    } else {
      setCartItems(updateCartItemsQty(cartItems, cid, type));
      // setCartCount(cartItems.reduce((total, item)=>{return total+item.qty}, 0));   //내가 만든 것 : qty를 다 더한걸로 하면 될줄 알았는데 반응이 한박자 느림 ㅋㅋ
      type==="+"? setCartCount(cartCount + 1) : cartCount>1 ? setCartCount(cartCount - 1) : setCartCount(cartCount)
    }
  }

  // console.log(cartItems);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout cartCount={cartCount}/>}>
          <Route index element={<Home/>} />
          <Route path='/all' element={<Products/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/cart' element={<Cart items={cartItems} updateCart={updateCart}/>} />
          <Route path='/products/:pid' element={<ProductDetail addCart={addCart}/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

