// jshint esversion: 6
import React, { useEffect } from 'react'
import {MdDelete} from "react-icons/md"
import { useDispatch,useSelector } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

function CartItem({title,price,description, image,id}) {


  const cardId=useSelector((state) => state);
  const dispatch=useDispatch();

  function handleClick(){
    console.log("id: ",id);
    dispatch(remove(id));
    console.log(cardId);
    toast.error('Item removed from cart');
  }

  return (
    <div className='w-full flex border-b-2 pb-2'>
        <div className='p-5'>
            <img width={200} src={image}   alt="" />
        </div>
        <div className='flex flex-col p-5 gap-y-3'>
            <p className='font-bold'>{title}</p>
            <p className='text-xs'>{description.length>80 ? (description.slice(0,80)+"..."):(description)}</p>
            <div className='flex justify-between text-xl'>
                <div className='text-green-500 font-bold'>${price}</div>
                <div onClick={handleClick} className='rounded-full bg-red-100 hover:bg-red-300 duration-100 text-red-700 grid items-center text-2xl p-2'>
                    <MdDelete />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem