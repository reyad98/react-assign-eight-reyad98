import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Header/Product/Product';
import './Main.css'

const Main = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState([]);

    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    const handleTotal = (product) => {
        const newTotal = [...total, product];
        setTotal(newTotal);
        //console.log(newTotal);
    }

    return (
        <div className="main-container">
            <div className="product-container">
                {
                    products.map((product,i) => <Product
                        key={i}
                        product={product}
                        handleTotal={handleTotal}
                    ></Product>)
                }
            </div>
            <div>
                <Cart
                    total={total}
                ></Cart>
            </div>
            
        </div>
    );
};

export default Main;