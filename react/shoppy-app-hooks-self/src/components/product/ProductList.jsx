import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductAvatar } from './ProductAvatar.jsx';
import { ProductContext } from '../../context/ProductContext.js';
import { useProduct } from '../../hooks/useProduct.js';

export function ProductList() {
    const {rows} = useContext(ProductContext);
    const {showRows} = useProduct();
    const [number, setNumber] = useState(3);
    useEffect(()=>{
        showRows(number);
    }, [number]);
    
    return (
        <div>
            {/* {list && list.map(product => 
                <ProductAvatar img={product.image} />
                )}             */}
            {rows && rows.map((rowArray, idx) => 
                <div className='product-list' key={idx}>
                    {rowArray && rowArray.map((product, idx) => 
                        <Link to={`/products/${product.pid}`}>
                            <ProductAvatar img={product.image} key={idx} />
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

