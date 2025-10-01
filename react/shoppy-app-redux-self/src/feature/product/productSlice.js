import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    "productList": [],
    "rows": [],
    "product": {}
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductList (state, action) {
            const {productList, rows} = action.payload;
            state.productList = productList;
            state.rows = rows;
        },
        findProduct (state, action) {
            const {pid} = action.payload;
            state.product = state.productList.find(item=>item.pid===pid);
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProductList, findProduct } = productSlice.actions

export default productSlice.reducer