import React, { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rp';
    const summoning_fee = products.map(product => product.price * 0.5);
    const [search, setSearch] = React.useState('');
    const [showSearch, setShowSearch] = React.useState(false);

    const value = {
        products,
        currency,
        summoning_fee,
        search, setSearch,
        showSearch, setShowSearch
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;