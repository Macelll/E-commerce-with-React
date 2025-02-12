import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import { formatPrice } from '../utils/formatPrice';

const CartTotal = () => {
    const {currency, summoning_fee, getCartAmount} = useContext(ShopContext);

    return (
    <div className=' w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'}/>
        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{formatPrice(getCartAmount(), currency, 'id-ID')}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Summoning Fee</p>
                <p>{formatPrice(summoning_fee, currency, 'id-ID')}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Total</p>
                <p>{getCartAmount() === 0 ? 0 : formatPrice(getCartAmount() + summoning_fee,currency,'id-ID')}</p>
            </div>
        </div>
    </div>
  )
}

export default CartTotal