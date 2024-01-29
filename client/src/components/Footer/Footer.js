import React from 'react'
import './Footer.css'

function Footer() {
  return (
<>



    <footer className=''>
        <div class="container mx-4">
            <div class="row">
               
                <div class="col-lg-2 col-sm-6">
                    <div class="single-box">
                        <h2 className='text-lg'>Shop</h2>
                    <ul className='text-sm'>
                        <li><a href="#">Occasion</a></li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Sale</a></li>
                      
                    </ul>
                    </div>                    
                </div>
                <div class="col-lg-2 col-sm-6">
                    <div class="single-box">
                        <h2 className='text-lg'>About Us</h2>
                    <ul className='text-sm'>
                        <li><a href="#">Shipping Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                    </div>                    
                </div>

                
                <div class="col-lg-4 col-sm-6">
                    <div class="single-box">
                        <h2 className='text-lg'>Sign up </h2>
                        <p className='text-sm'>Sign up for shopping and get special offers and once-in-a-lifetime deals.</p>
                        <button className='border px-6 py-1 rounded-2xl mt-4'> sign Up</button>
                        {/* <p class="socials">
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-dribbble"></i>
                            <i class="fa fa-pinterest"></i>
                            <i class="fa fa-twitter"></i>
                        </p> */}
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="single-box">
                        {/* <img src="img/logo.png" alt=""/> */}
                        <h2 className='text-lg'>Address</h2>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam repellendus sunt praesentium aspernatur iure molestias.</p>
                  
                    <div class="card-area">
                            <i class="fa fa-cc-visa"></i>
                            <i class="fa fa-credit-card"></i>
                            <i class="fa fa-cc-mastercard"></i>
                            <i class="fa fa-cc-paypal"></i>
                    </div>
                    </div>
                </div>

            </div>
        </div>
<div className=' mb-4 mt-14 text-center ' >
<p className="text-sm">
          &copy; {new Date().getFullYear()} Jyoanns
         </p>
         <p className='mt-2 text-sm'>Developed by Arohi Software development</p>
</div>
    </footer>


</>
  )
}

export default Footer