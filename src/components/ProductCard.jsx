

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

import { addItem, removeItem } from '../redux/Slices/CartSlice';


const ProductCard = ({ item }) => {

    const { cart } = useSelector((state) => state)
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem(item));
        toast.success('Item added to cart')
    }

    const removFromCart = () => {
        dispatch(removeItem(item.id))
        toast.error('Item remove from cart')
    }


    const isItemInCart = cart.some((addedInCart) => addedInCart.id === item.id);
   

    return (
        <div className='flex flex-col justify-between items-center gap-3 mt-10 mx-3 outline outline-slate-300 outline-1 
        hover:scale-[1.04] duration-300 rounded-xl p-4 ease-in shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] group'>

            <p className='text-gray-700 font-semibold text-lg truncate w-40 mt-1'>{item.title}</p>
            <p className='text-gray-400 text-[10px] text-left font-normal w-40'>{item.description.split(' ').slice(0, 10).join(" ") + '...'} </p>
            <div className='h-[180px]'>
                <img src={item.image} alt={item.image} className='w-full h-full object-fit' />
            </div>

            <div className='flex justify-between items-center w-full mt-5 '>
                <p className='text-green-600 font-semibold'>${item.price}</p>

                {isItemInCart ?
                    (<button onClick={removFromCart}>
                        <p className='py-2 px-4 text-sm rounded-full font-semibold outline outline-2 outline-slate-600 uppercase 
                        group-hover:bg-red-600 group-hover:outline-none group-hover:text-slate-100 '
                        >remove item</p>
                    </button>)
                    :
                    (<button onClick={addToCart}
                        className='py-2 px-4 text-sm rounded-full font-semibold outline outline-2 outline-slate-600 uppercase 
                        group-hover:bg-green-600 group-hover:outline-none group-hover:text-slate-100 '>
                        <p>add to cart</p>
                    </button>)}
            </div>
        </div>
    )
}

export default ProductCard