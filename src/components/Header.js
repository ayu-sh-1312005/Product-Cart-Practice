import React from 'react'
import { Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
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
            <span onClick={()=> navigate("/cart")}>
              <FaShoppingCart />
            </span>
          </div>
        </nav>
    </div>
  )
}

export default Header