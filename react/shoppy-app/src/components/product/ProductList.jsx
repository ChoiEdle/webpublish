import React, { useEffect, useState } from 'react';
import { axiosData, groupByRows } from '../../utils/dataFetch.js';
import { ProductAvatar } from './ProductAvatar.jsx';

export function ProductList() {
    const [rows,setRows] = useState([]);
    const [number, setNumber] = useState(3);
    useEffect(()=>{
        const load = async() => {
            // const jsonData = await fetchData("/data/products.json");
            const jsonData = await axiosData("/data/products.json");
            const rows = groupByRows(jsonData, number);
            setRows(rows);
        }
        load();
    }, [number]);
    
    return (
        <div>
            {/* {list && list.map(product => 
                <ProductAvatar img={product.image} />
                )}             */}
            {rows && rows.map((rowArray, idx) => 
                <div className='product-list' key={idx}>
                    {rowArray && rowArray.map((product, idx) => 
                        <ProductAvatar img={product.image} key={idx} />
                    )}
                </div>
            )}
        </div>
    );
}

