// jshint esversion:6 
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add,remove } from '../redux/slices/CartSlice';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product({title,price,description, image,id}) {

  const {cart}=useSelector((state) => state);
  const dispatch=useDispatch();

  function addToCart(){
    dispatch(add({title,price,description, image,id}));
    toast.success('Item added to cart');
    console.log(cart);
  }

  function removeFromCart(){
    dispatch(remove(id));
    toast.success('Item removed from card');
    console.log(cart);
  }


  return (
    <div className='flex flex-col justify-around w-60 bg-white items-center mx-auto rounded-lg shadow-2xl border-2 text-justify p-2 duration-200 transform transition hover:-translate-y-4'>
        <p className='font-bold'>{title.length>20 ? (title.slice(0,20)+"..."):(title)}</p>
        <p className='text-xs'>{(description.length>100) ? (description.slice(0,50)+"..."):(description) }</p>
        <img width={100} src={image} alt="" />
        <div className='flex w-full justify-between items-center'>
            <p className='text-green-500 font-bold'>${price}</p>
            {!cart.some((p) => p.id==id) ?
            (<button onClick={addToCart}  className='rounded-2xl px-2 py-1 border-2 hover:bg-black hover:text-white'>Add to card</button>)
             : (<button onClick={removeFromCart} className='rounded-2xl px-2 py-1 border-2 hover:bg-black hover:text-white'>Remove to card</button>) 
            }

        </div>
    </div>
  )
}

export default Product