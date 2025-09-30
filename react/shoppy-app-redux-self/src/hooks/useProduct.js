import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const {productList, setProductList, rows, setRows, product, setProduct, imgList, setImgList} = useContext(ProductContext);

    const showRows = (number) => {        
        const load = async () => {
            const jsonData = await axiosData("/data/products.json");
            setProductList(jsonData);
            setRows(groupByRows(jsonData, number));
        }
        load();
    }

    const filterProduct = (pid) => {
        const filterData = () => {
            const fproduct = productList.find((item)=> item.pid === pid);
            setProduct(fproduct);
            setImgList(fproduct.imgList)            
        }
        filterData();        
    }

    return {showRows, filterProduct};
}

