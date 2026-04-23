import React, { Suspense } from 'react'
import ProductCard from './components/ProductCard';




const Product = async () => {
   let res  = await fetch('https://fakestoreapi.com/products')
   let data  =   res.json()



  return (
  <div className='flex flex-col gap-4'>
        <div> 
          <h1  className='text-red-500 capitalize text-4xl mt-3'>product page</h1>
        </div>
    <div className='flex'>
        
      <Suspense fallback={<h1 className='text-rose-500 capitalize text-7xl'>loading</h1>} >
          <ProductCard Product={data} />
      </Suspense>
    </div>
  </div>
  )
}

export default Product