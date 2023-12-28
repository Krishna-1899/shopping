import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useState, useEffect } from "react";
function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="w-full flex justify-center  mx-auto  max-w-6xl items-center h-full ">
      {cart.length > 0 ? (
        <div className="flex flex-row gap-[50px]">
          <div className="flex flex-col">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="my-[50px]  flex flex-col  justify-between">
            <div className="flex flex-col">
              <div className="text-green-700 uppercase font-medium m-0 p-0" >Your Cart</div>
              <div className="text-green-700 uppercase text-[32px] font-bold m-0 p-0">Summary</div>
              <p className="text-gray-700 text-[16px] font-bold">
                Total Items :
                <span className="text-black font-bold">{cart.length}</span>
              </p>
            </div>
            <div className="flex flex-col p-2 ">
              <p className="text-[16px] font-bold text-gray-700 mb-3">Total Amount: <span className="text-black font-[700]">${totalAmount}</span></p>
              <button className="bg-green-700 text-white font-bold text-[16px] rounded-lg w-[300px] px-5 py-2">Checkout Now </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center h-[80vh] flex-col gap-5 justify-center ">
          <h1 className="text-gray-700 font-bold ">Cart empty</h1>
          <Link to={"/"}>
            <button className="w-[300px] rounded-lg bg-green-700 font-bold text-[16px] py-2 text-white">Shop Now </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
