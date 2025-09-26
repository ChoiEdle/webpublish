import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [productList, setProductList] = useState([]);
    const [rows, setRows] = useState([]);
    
    return(
        <ProductContext.Provider value={{productList, setProductList, rows, setRows}}>
            {children}
        </ProductContext.Provider>
    );
}