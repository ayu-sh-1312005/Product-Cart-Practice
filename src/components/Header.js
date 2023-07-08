import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

function Header() {
  const navigate=useNavigate();
  const {cart}=useSelector((state)=> state);
  const [cartLength,setCartLength]=useState(0);

  useEffect(()=>{
    setCartLength(cart.length);
  });

  return (
    <div className='bg-black sticky top-0 z-10'>
        <nav className='p-4 max-w-[1080px] mx-auto flex justify-between'>
          <div>
            <Link to="/">
              <img width={60} src="https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png" alt="" />
            </Link>
          </div>
          <div className='flex items-center text-white gap-2 text-xl'>
            <Link to="/">Home</Link>
            <span onClick={()=> navigate("/cart")} className='relative'>
              <FaShoppingCart />
              {cartLength!=0 &&
              <div className='absolute text-xs text-center h-4 w-4 rounded-full duration-150 animate-bounce font-bold -right-1 -top-1  bg-red-600 '>
                {cartLength}
              </div>
              }
            </span>
          </div>
        </nav>
    </div>
  )
}

export default Header