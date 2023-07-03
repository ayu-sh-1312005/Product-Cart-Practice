// jshint esversion: 6
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';

function Cart() {

  const {cart}=useSelector((state) => state);
  console.log(cart)
  const [totalAmount,setTotalAmount]=useState(0);

  useEffect(()=>{
    console.log("he")
    setTotalAmount(cart.reduce((prev,cur)=> prev+cur.price,0));
  });


  return (
    <Link to="/cart">
      <div className='flex max-w-[1080px] mx-auto justify-between min-h-screen'> 
        {cart.length>0 &&
        <div className='flex-[0.6] flex flex-col gap-3 '>
        {cart.map((data)=> <CartItem title={data.title} price={data.price} description={data.description} image={data.image} id={data.id} />)}
        </div>
        }
        {cart.length>0 &&
        <div className='flex-[0.4] flex flex-col p-10 gap-1'>
          <p className='text-lg uppercase text-green-700 font-bold'>your cart</p>
          <p className='text-3xl uppercase text-green-700 font-bold'>summary</p>
          <p className='uppercase text-lg mt-2 mb-5'>total item: {cart.length}</p>
          <p className='uppercase text-lg'>total amount: <span className='font-bold'>${totalAmount.toFixed(2)}</span></p>
          <button className=' bg-green-700 text-white font-bold w-[80%] p-2 rounded-lg '>Checkout Now</button>
        </div>
        }
        {cart.length==0 && <EmptyCart />}
      </div>
    </Link>
  )
}

export default Cart