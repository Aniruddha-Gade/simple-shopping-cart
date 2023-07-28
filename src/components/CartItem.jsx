import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { removeItem } from '../redux/Slices/CartSlice'

const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  const removFromCart = () => {
    dispatch(removeItem(item.id))
    toast.success('Item remove from cart')
  }


  return (
    <div className='flex flex-col md:flex-row max-w-6xl justify-between items-center p-2 md:p-5 md:mx-5 my-2 border-b-2 border-slate-500'>
        <div className='w-[100px] md:w-[170px]'>
          <img src={item.image} alt={item.image} className='w-full h-full object-fit' />
        </div>


        <div className='flex flex-col md:ml-10'>
          <p className='text-gray-700 font-semibold text-xl mt-1'>{item.title}</p>
          <p className='text-[15px] text-left font-normal mt-5'>{item.description.split(' ').slice(0, 10).join(" ") + '...'} </p>


          <div className='flex justify-between items-center mt-5 ' >
            <p className='text-green-600 font-bold text-[15px] '>${item.price}</p>

            <button onClick={removFromCart} className='bg-red-200 hover:bg-red-400 text-red-700  hover:text-white  rounded-full p-3'>
              <MdDelete className=''/>
            </button>
          </div>
        </div>


    </div>);
};

export default CartItem;






