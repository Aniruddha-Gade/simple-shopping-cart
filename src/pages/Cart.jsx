import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <div className="flex justify-center min-h-[80vh] items-center max-w-[1200px] mx-auto  mt-20">
      {
        cart.length > 0 ?
          (
            <div className="flex flex-col sm:flex-row  justify-between mx-auto">
              <div className="p-2 md:w-[60%]  ">
                {
                  cart.map((item, index) => (
                    <CartItem key={item.id} item={item} itemIndex={index} />
                  ))
                }
              </div>

              <div className="md:w-[40%] md:mt-5 p-5 md:p-0 my-[56px] md:my-0">
                <div className="md:p-5 flex flex-col gap-5 justify-between h-full">
                  <div className="gap-5">
                    <p className="uppercase text-2xl text-green-600 font-semibold ">your cart</p>
                    <h3 className="uppercase text-5xl text-green-600 font-semibold ">summary</h3>
                    <p className="text-slate-700 text-xl font-semibold mt-3">Total Items : {cart.length}</p>
                  </div>

                  <div className="">
                    <p className="text-slate-700 font-bold mb-4 text-xl">
                      Total Amount : <span className="text-black font-black">{totalAmount}</span></p>
                    <button className="text-slate-100 font-bold bg-green-600 p-3 rounded-lg text-xl w-full
                               outline outline-2 outline-green-600 hover:bg-white hover:text-green-600 transition-all duration-300"
                    >
                      Checkout Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
          :

          // when cart is empty
          (
            <div className="flex flex-col gap-5 text-slate-700">
              <h2 className="text-xl font-bold ">Your cart is empty!</h2>
              <NavLink to='/' >
                <button className="text-slate-100 font-bold bg-green-600 p-3 rounded-lg text-xl w-full
                          outline outline-2 outline-green-600 hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Shop Now
                </button>
              </NavLink>
            </div >
          )}


    </div >
  );
};

export default Cart;


