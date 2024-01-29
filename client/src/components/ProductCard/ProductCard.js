import React from 'react'
import "./ProductCard.css"

function ProductCard({product}) {
  return (
    <div className='productCard cursor-pointer flex flex-col  bg-white rounded-sm border showdo-lg overflow-hidden w-[16rem] mt-12 mx-2  '>
       
    <img src={product.imageUrl}  className='h-[20rem] object-cover object-left-top' />
   
     <div className='px-3 pt-3  space-y-1'>
        <h3 className='font-bold '>{product.title} </h3>
        <p className=' text-sm text-gray-500'>{product.title2} </p>
    
     </div>
        
        <div className='flex space-x-3 px-3 py-1'>
            <p className='font-semibold'>{product.selling_price}</p>
            <p className='line-through opacity-60'>{product.price}</p>
            <p className='text-green-600 font-semibold'>{product.disscount}</p>
        </div>

        </div>
  )
}

export default ProductCard
