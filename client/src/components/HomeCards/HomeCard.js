import React from 'react'

function HomeCard({product}) {
  return (
    <>
  
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-sm showdo-lg overflow-hidden w-[22rem] mt-12 mx-2 object-cover object-left-top '>
       
<img src={product.imageUrl} className='h-[25rem]' />
 
 <div className='p-4'>
    {/* <h3 className='font-medium text-gray-900'>{product.brand} </h3> */}
    <p className=' text-sm text-gray-500'>{product.title} </p>
    <p className='mt-2 text-sm font-semibold '>Rs. {product.price} /-</p>

 </div>
    
    </div>
    </>
  )
}


export default HomeCard