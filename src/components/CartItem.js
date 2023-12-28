import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();
  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div>
      <div className="flex items-center justify-between h-full gap-5 border-b-2 border-gray-700 border-solid py-4 ">
        <div className="flex items-center justify-center">
          <div className="h-[180px] max-w-[180px]">
              <img src={item.image} className="h-full w-full "/>
          </div>
        </div>
        <div className="p-4 flex flex-col max-w-sm">
          <h1 className="text-gray-700 font-bold text-[20px]">{item.title}</h1>
          <h1 className="text-gray-500 text-sm mt-4"> {item.description.split(" ").slice(0,15).join(" ")+ "..."}</h1>
          <div className="flex items-center justify-between mt-4">
            <p className="text-green-700 font-bold text-[16px]">${item.price}</p>
            <div onClick={removeFromCart} className="w-[30px] h-[30px] rounded-full bg-red-400  flex items-center justify-center">
              <FcDeleteDatabase className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
