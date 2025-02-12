import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rp';
    const summoning_fee = products.map(product => product.price * 0.5);
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, variants) => {
        if (!variants) {
            toast.error('Please select a variant!');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][variants]) {
                cartData[itemId][variants]++;
            } else {
                cartData[itemId][variants] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][variants] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let count = 0;
        for (const item in cartItems) {
            for (const variant in cartItems[item]) {
                try {
                    if (cartItems[item][variant] > 0) {
                        count += cartItems[item][variant];
                    }
                } catch (error) {
                    // Handle error
                }
            }
        }
        return count;
    }

    const value = {
        products,
        currency,
        summoning_fee,
        search, setSearch,
        showSearch, setShowSearch,
        cartItems, addToCart, getCartCount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;