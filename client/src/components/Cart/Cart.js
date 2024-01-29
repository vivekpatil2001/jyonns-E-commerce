import React from 'react'
import CartItem from '../CartItem/CartItem'

function Cart() {
  return (
    <div>
     
<div className='lg:grid grid-cols-3 lg:px-16 my-5 relative'>
<div className='col-span-2'>
{[1,1,1,1].map((item)=> <CartItem/>)}
</div>


<div className='py-4 px-5 sticky top-0 h-[50vh] ml-7 rounded-lg shadow-lg border  '>
    <div> 
        <p className='pb-4 text-lg opacity-60 font-bold'>Price details</p>
        <hr/>

        <div className='space-y-3 font-semibold'>
            <div className='flex justify-between pt-3'>
                <span>Price</span>
                <span className='text-green-600'>45555</span>

            </div>

            <div className='flex justify-between pt-3'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>45</span>

            </div>

            <div className='flex justify-between pt-3 '>
                <span>Disscount</span>
                <span className='text-green-600 '>30%</span>

            </div>
            <hr/>

            <div className='flex justify-between pt-1 font-bold text-lg'>
                <span>Total</span>
                <span className='text-green-600 '>45555</span>

            </div>

            <button className='bg-black text-white rounded-lg w-full py-2 my-4 text-lg'> Check Out</button>

        </div>
    </div>

</div>

</div>


    </div>
  )
}

export default Cart
