import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const {productList, setProductList, rows, setRows} = useContext(ProductContext);

    useEffect(() => {
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            setProductList(jsonData);
            setRows(groupByRows(jsonData, 3));
        }
        load();
    })
    
    const showRows = (number) => {
        // const load = async () => {
        //     const jsonData = await axiosData("/data/products.json");
        // }
        // load();

    }

    return {showRows};
}

