import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([]);
    const [rows, setRows] = useState([]);
    const [product, setProduct] = useState({});
    const [imgList,setImgList] = useState([]);
    
    
    return(
        <ProductContext.Provider value={{productList, setProductList, rows, setRows, product, setProduct, imgList, setImgList}}>
            {children}
        </ProductContext.Provider>
    );
}