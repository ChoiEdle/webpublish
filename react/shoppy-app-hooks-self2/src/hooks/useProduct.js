import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { groupByRows } from '../utils/dataFetch.js';

export function useProduct() {
    const {rows, setRows, product, setProduct, imgList, setImgList} = useContext(ProductContext);

    const createRows = (number) => {
        const load = async() => {
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
    }

    const filterProduct = (pid) => {
        const filterData = async () => {
            // const jsonData = await axiosData("/data/products.json");
            const [fproduct] = await rows.flat().filter((item) => item.pid === pid);      //[]준건 배열을 구조 분해 할당 한 것
            setProduct(fproduct);
            setImgList(fproduct.imgList)            
        }
        filterData();
    }

    return {createRows, filterProduct};
}

