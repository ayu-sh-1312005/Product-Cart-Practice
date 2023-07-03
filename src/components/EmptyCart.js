import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCart() {
  return (
    <div className='m-auto flex flex-col justify-between items-center gap-6'>
        <p className='text-xl'>Your cart is empty!</p>
        <Link to="/">
            <button className='uppercase bg-green-500 rounded-lg px-6 py-3 text-white font-bold hover:bg-white border-green-500 border-2 hover:text-green-500 hover:border-green-500 '>shop now</button>
        </Link>
    </div> 
  )
}

export default EmptyCart