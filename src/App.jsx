import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import Home from './components/Home';
import { Router,Route, Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='relative'>
      <Header />
          <Routes>
            <Route  path="/" element={<Home />} />
            <Route  path="/cart" element={<Cart />} />
          </Routes>
    </div>
  )
}

export default App