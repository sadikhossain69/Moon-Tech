import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {

    const [data, setData] = useState([])

    const getProducts = async () => {
        const { data: products } = await axios.get('https://moon-tech-server-odfw.onrender.com/products')
        setData(products)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const value = {
        data
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;