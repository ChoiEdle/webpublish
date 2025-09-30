import { createSlice } from '@reduxjs/toolkit'
import { cartItemsCheck, cartItemsAddInfo } from '../../utils/cart.js';

const initialState = {
  cartCount: 0,
  cartList: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem (state, action) {
        const {cartItem} = action.payload;
        state.cartList = cartItemsCheck(state.cartList, cartItem);
    },
    updateCartCount (state) {
        state.cartCount = state.cartList.reduce((total, item) => total + item.qty, 0);
    },
    showCartItem (state, action) {
        const {jsonData} = action.payload;
        state.cartList = cartItemsAddInfo(jsonData, state.cartList);
    },
    updateTotalPrice (state) {
        state.totalPrice = state.cartList.reduce((total, item) => total + (item.price*item.qty), 0);
    },
    updateCartItem (state, action) {
        const {cid, type} = action.payload;
        state.cartList = state.cartList.map(item => item.cid === cid ? type === '+' ? {...item, qty: item.qty + 1 } : item.qty > 1 ? {...item, qty: item.qty - 1 }: item : item);
    },
    removeCartItem (state, action) {
        const {cid} = action.payload;
        state.cartList = state.cartList.filter(item => !(item.cid === cid));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCartItem, updateCartCount, showCartItem, updateTotalPrice, updateCartItem, removeCartItem } = cartSlice.actions

export default cartSlice.reducer