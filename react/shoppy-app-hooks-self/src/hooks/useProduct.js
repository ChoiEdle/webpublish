import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const {productList, setProductList, rows, setRows} = useContext(ProductContext);

    const createProduct = () => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            setProductList(jsonData);
        }
        load();
    }
    
    const showRows = (number) => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            setRows(groupByRows(jsonData, number));
        }
        load();
    }

    return {createProduct, showRows};
}

