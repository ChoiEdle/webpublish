import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext.js';
import { axiosData, groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const {productList, setProductList, imgList, setImgList, product, setProduct} = useContext(ProductContext);

    const createProduct = (number) => {
        const load = async() => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setProductList(rows);
        }
        load();
    }

    const filterProduct = (pid) => {
        const filterData = async () => {
            const jsonData = await axiosData("/data/products.json");
            const [fproduct] = await jsonData.filter((item) => item.pid === pid);      //[]준건 배열을 구조 분해 할당 한 것
            setProduct(fproduct);
            setImgList(fproduct.imgList)            
        }
        filterData();        
    }

    return { createProduct, filterProduct };
}

