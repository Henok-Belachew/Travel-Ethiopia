import React from 'react'
import img from '../assets/images/img-1.jpg'
import {AiFillStar} from 'react-icons/ai'

function Book() {
  return (
    <div className='px-96 py-12'>
      {/* Top Section */}
      <div className='flex justify-between'>

         {/* Left Side */}
         <img src={img} className='rounded-lg w-[58%] h-[385px] object-cover' alt="" />

         {/* Right Side */}
         <div className='w-[40%] flex flex-col p-6 border-slid shadow-sm border-[1px] rounded-lg gap-6'>

            {/* Top Section */}
            <div className='flex flex-col gap-5'>
               <div className='flex justify-between'>
               <h2 className='font-'>Pricing <span className='font-bold text-green-500'>1,499 <span className='font-light text-xs'>ETB</span> </span> </h2>

                  <div className='flex gap-1 items-center'>
                     Rating <span className='font-semibold text-green-500 -mr-1'>3</span> <AiFillStar className='text-green-500' />
                  </div>

               </div>
               

               {/* <div className='border-t-[1px] border-solid border-black'>1</div> */}

               <hr  className='border-t-[0.7px] border-solid' />
               
            </div>

            <div className='flex flex-col gap-6'>
               <h1 className='font-semibold text-[16px] '>Information</h1>

               {/* Input Fields */}
               <div className='flex flex-col justify-between gap-2 px-3 pb-3 border-solid border-[1px] rounded-md'>
                  <input placeholder='Full Name ...' type="text" className='focus:outline-none p-3 border-b-[1px] ' />
                  <input placeholder='Phone number' type="number" className='focus:outline-none p-3 border-b-[1px] ' />
                  <div className='flex gap-1'>
                     <input type="date" placeholder='Choose Date' className='w-1/2 focus:outline-none border-b-[1px] p-2 ' />
                     <input placeholder='Guests' type="number" className='w-1/2 focus:outline-none p-3 border-b-[1px] ' />
                  </div>
               </div>

               {/* Invoice Section */}
               <div className='px-2 flex flex-col gap-2'>
                  <h1 className='flex justify-between text-sm opacity-60'>
                     <span>$199 X 1 Person</span>
                     <span>$199</span>
                  </h1>
                  <h1 className='flex justify-between text-sm opacity-60'>
                     <span>Service Charge</span>
                     <span>$20</span>
                  </h1>
                  <h1 className='flex justify-between font-semibold'>
                     <span>Total</span>
                     <span>$229</span>
                  </h1>
               </div>

               <button className='py-3 bg-green-500 rounded-md font-semibold text-white'>Book Now</button>


            </div>
         </div>

      </div>
      
      
    </div>
  )
}

export default Book

