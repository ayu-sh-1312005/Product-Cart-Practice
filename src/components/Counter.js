// jshint esversion:6

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,setZero } from '../redux/slices/CartSlice';

function Counter() {

    const count=useSelector((state)=> state.counter.value);
    const dispatch=useDispatch();
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            {count}
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
        </div>
        <div>
            <button onClick={()=> dispatch(setZero())}>Reset</button>
        </div>
    </div>
  )
}

export default Counter