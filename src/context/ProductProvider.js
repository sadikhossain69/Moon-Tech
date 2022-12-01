import axios from 'axios';
import React, { createContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productReducer } from '../state/ProductState/ProductReducer';

export const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productReducer, initialState)

    const getProducts = async () => {
        const { data: products } = await axios.get('https://moon-tech-server-odfw.onrender.com/products').catch(() => {
            dispatch({type: actionTypes.FETCHING_ERROR})
        })
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: products })
    }

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        getProducts()
    }, [])

    const value = {
        state,
        dispatch
    }
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;