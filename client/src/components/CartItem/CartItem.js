import React from 'react'
import { IoIosRemoveCircleOutline , IoIosAddCircleOutline } from "react-icons/io";

function CartItem() {
    return (
        <div className='p-5 mb-2 shadow-lg border rounded-md'>
            <div className='flex '>

                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg-h-[9rem]'>
                    <img src='https://rukminim1.flixcart.com/image/612/612/l1fc0i80/sari/8/b/s/free-sari-fabwoman-unstitched-original-imagcztprwg9dgvz.jpeg?q=70' />
                </div>

                <div className='ml-6 mt-3 space-y-1'>
                    <p className='font-semibold'>slim saree</p>
                    <p>Color: beige</p>
                    <p>Brand: azoora</p>

                    <div className='flex space-x-3  py-1'>
                        <p className='font-semibold'>677</p>
                        <p className='line-through opacity-60'>1788</p>
                        <p className='text-green-600 font-semibold'>60%</p>
                    </div>
                    
<div className='lg:flex-row items-center lg:space-x-10 mt-2'>

<div className='flex items-center space-x-9'>
<IoIosRemoveCircleOutline className='text-xl '/>

<span className='text-lg'> 6</span>

<IoIosAddCircleOutline className='text-xl' />

<span className='text-blue-700 font-semibold '>Remove</span>
</div>


</div>

                </div>

            </div>


        </div>
    )
}

export default CartItem