import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import Spinner from './Spinner';


function Home() {

  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(false);

  async function fetchProductsData(){
    setLoading(true);

    try{
      const data=await fetch('https://fakestoreapi.com/products');
      const jsonData=await data.json();
      setProducts(jsonData);
      console.log(jsonData)
    }catch(err){
      console.error(err);
      setProducts([]);
    }

    setLoading(false);

  };

  useEffect(()=>{
    fetchProductsData();
  },[]);

  return (
    <Link to="/">
      <div className='flex flex-wrap max-w-[1080px] min-h-screen justify-between mx-auto gap-y-6 py-6 shadow-md '>
        {loading ? 
        (<Spinner />):
        (products.length>0 ? 
        (products.map((data)=> <Product id={data.id} title={data.title} price={data.price} description={data.description} image={data.image} />)): <div className='m-auto text-2xl'><p>No data found</p></div>
        )
        }
      </div>
    </Link>
  )
}

export default Home