import { setProductList, findProduct } from "./productSlice.js";
import { axiosData, groupByRows } from "../../utils/dataFetch.js";

export const showRows = (number) => async(dispatch) => {
    const jsonData = await axiosData("/data/products.json");
    const rows = groupByRows(jsonData, number);
    dispatch(setProductList({"productList":jsonData, "rows":rows}));
}

export const filterProduct = (pid) => async(dispatch) => {
    dispatch(findProduct({"pid":pid}));
}