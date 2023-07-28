import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux';


const Navbar = () => {

  const { cart } = useSelector(state => state);

  return (
    <nav className='flex justify-between px-4 items-center max-w-6xl h-14 md:h-20 mx-auto  '>
      <NavLink to='/' >
        <img src={logo} alt='logo' className='h-10 md:h-14' />
      </NavLink>


      <div className='flex justify-between items-center text-white font-medium space-x-6 '>
        <NavLink to='/' >
          <p className='hover:text-green-600 duration-300'>Home</p>
        </NavLink>

        <NavLink to='/cart'>
          <div className='flex relative '>
            <FaShoppingCart className='text-2xl hover:text-green-600 duration-300'/>
            {
              cart.length > 0 && 
              <p className='absolute -top-1 -right-2 bg-green-600 w-5 h-5 rounded-full text-xs flex justify-center items-center animate-bounce'
              >{cart.length}</p>
            }
          </div>
        </NavLink>
      </div>

    </nav>
  );
};

export default Navbar;
