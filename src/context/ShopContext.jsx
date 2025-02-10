import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rp';
    const summoning_fee = products.map(product => product.price * 0.5);

    const value = {
        products,
        currency,
        summoning_fee
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;