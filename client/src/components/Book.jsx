import React from 'react'
import img from '../assets/images/img-1.jpg'
import {AiFillStar} from 'react-icons/ai'

function Book() {
  return (
    <div className='px-96 py-12'>
      {/* Top Section */}
      <div className='flex justify-between'>

         {/* Left Side */}
         <img src={img} className='rounded-lg w-[63%] h-[385px] object-cover' alt="" />

         {/* Right Side */}
         <div className='w-[35%] flex flex-col p-6 border-slid border-[1px]  rounded-lg gap-6'>

            {/* Top Section */}
            <div className='flex flex-col gap-5'>
               <div className='flex justify-between'>
               <h2 className='font-semibold'> <span className='font-bold text-3xl text-green-700'>1,499 <span className='font-light text-xs'>ETB/person</span> </span> </h2>

                  <div className='flex gap-1 items-center'>
                     Rating <span className='font-semibold text-green-700 -mr-1'>3 (2) </span> <AiFillStar className='text-green-700' />
                  </div>

               </div>
               

               {/* <div className='border-t-[1px] border-solid border-black'>1</div> */}

               <hr  className='border-t-[0.7px]  border-solid' />
               
            </div>

            <div className='flex flex-col gap-6'>
               <h1 className='font-semibold text-[16px] '>Information</h1>

               {/* Input Fields */}
               <div className='flex flex-col justify-between gap-4 p-6  border-solid border-[1px] rounded-md'>
                  <label className='font-semibold flex flex-col gap-2'> Full Name <input placeholder='Enter your full name ...' type="text" className='font-normal  border-green-700 focus:outline-none  text-sm border-b-[1px] py-1' /> </label>
                  <label className='font-semibold flex flex-col gap-2'> Phone Number <input placeholder='+251 ...' type="text" className='font-normal  border-green-700  focus:outline-none text-sm border-b-[1px] py-1' /> </label>
                  <label className='font-semibold  flex flex-col gap-3'>No of Guests <input placeholder='Enter total passengers here ...' type="number" className='font-normal  py-1  border-b-[1px] focus:outline-none border-green-700 text-sm ' /> </label>
                  <label className='font-semibold flex items-center gap-2'> Date <input placeholder='+251 ...' type="date" className='font-normal  border-green-700  focus:outline-none text-sm ' /> </label>
                 
               </div>

               {/* Invoice Section */}
               <div className='px-2 flex flex-col gap-2'>
                  <h1 className='flex justify-between text-md opacity-80'>
                     <span>$199 X 1 Person</span>
                     <span>$199</span>
                  </h1>
                  <h1 className='flex justify-between text-md opacity-80'>
                     <span>Service Charge</span>
                     <span>$20</span>
                  </h1>
                  <h1 className='flex justify-between font-semibold'>
                     <span>Total</span>
                     <span>$229</span>
                  </h1>
               </div>

               <button className='py-3 bg-green-100 border-[1px] border-green-700 hover:bg-green-500  hover:text-white rounded-md font-semibold text-black'>Book Now</button>


            </div>
         </div>

      </div>
      
      
    </div>
  )
}

export default Book

