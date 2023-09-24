import React from 'react'
import img from '../assets/images/img-1.jpg'
import {AiFillStar, AiOutlineSend, AiOutlineStar} from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'
import {BsPeople, BsPersonCircle } from 'react-icons/bs'
import {BiMoney} from 'react-icons/bi'
import { useState } from 'react'

function Book() {
   const [rating, setRating] = useState(0)
  return (
    <div className='px-96 py-12'>
      {/* Top Section */}
      <div className='flex justify-between'>

         {/* Left Side */}
         <div className='flex flex-col gap-8 w-[63%]'>
         <img src={img} className='rounded-lg w-full h-[385px] object-cover' alt="" />

         <div className='border-solid border-[1px] p-4 rounded-lg'>
            <h1 className='font-bold text-2xl flex justify-between'>Westminister Bridge <h2 className='font-semibold'> <span className='font-bold text-2xl text-green-700 flex gap-1 items-center'> <BiMoney /> 1,499 <span className='font-light text-xs'>ETB/ <b className='font-semibold'>person</b> </span> </span> </h2>
            </h1>

            <div className='flex gap-5 my-2'>
               <span className='flex items-center gap-2'><CiLocationOn/> Bale Robe </span>
               <span className='flex items-center gap-2'> <BsPeople/> 15 </span>
               <div className='flex gap-1 items-center'>
                     Rating <span className='font-semibold text-orange-500 -mr-1'>3(2) </span> <AiFillStar className='text-orange-500' />
                  </div>
            </div>

            <p className='flex gap-1 flex-col mt-6'>
               <h1 className='font-semibold text-lg'>Description</h1>
                
                <span className='text-light-grey text-base'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sit aliquid esse molestias distinctio? Doloremque atque aspernatur pariatur.
                </span>
            </p>

         </div>

         {/* Review Section */}
         <div className='border-solid border-[1px] p-4 rounded-lg flex flex-col gap-2' >
                  <span className='flex justify-between items-center'>
                        <h1 className='font-semibold mb-3'>Reviews <span>(2 Reviews)</span> </h1>

                        <span className='flex gap-1 items-center text-orange-500 text-xl'>
                         
                           {rating < 1 ? <AiOutlineStar className='cursor-pointer' onClick={()=> setRating(1)} /> : <AiFillStar className='cursor-pointer' onClick={()=> setRating(0)} />}
                           {rating < 2 ? <AiOutlineStar className='cursor-pointer' onClick={()=> setRating(2)} /> : <AiFillStar className='cursor-pointer' onClick={()=> setRating(2)} />}
                           {rating < 3 ? <AiOutlineStar className='cursor-pointer' onClick={()=> setRating(3)} /> : <AiFillStar className='cursor-pointer' onClick={()=> setRating(3)} />}
                           {rating < 4 ? <AiOutlineStar className='cursor-pointer' onClick={()=> setRating(4)} /> : <AiFillStar className='cursor-pointer' onClick={()=> setRating(4)} />}
                           {rating < 5 ? <AiOutlineStar className='cursor-pointer' onClick={()=> setRating(5)} /> : <AiFillStar className='cursor-pointer' onClick={()=> setRating(5)} />}
                           <span className='text-base font-semibold'>({rating})</span>

                        
                        </span>

                  </span>
                  

                  {/*  Review Input Field  */}
                  <div className='flex border-solid border-[1px]  rounded-lg p-2 justify-between'>
                     <input placeholder='Share your thoughts ...' type="text" className='grow focus:outline-none' />
                     <button className='bg-green-100 border-solid border-[1px] border-green-700 px-8 flex gap-2 items-center rounded-md py-2 font-semibold hover:bg-green-500 hover:text-white'>Submit <AiOutlineSend/> </button>
                  </div>

                  {/* Reviews Made By Others */}
                  <div className='mt-12'>
                     <div className='flex gap-3 px-4'>

                           {/* Use Avator */}
                           <BsPersonCircle className='text-5xl'/>


                           {/* Right Side */}
                           <div className=''>                            
                             
                              <div className='flex  justify-between'>

                                 {/* User and Date */}
                                 <span>
                                    <h1 className='font-semibold'>Henok Belachew</h1>
                                    <span className='text-sm'>January 14,2023</span>
                                 </span>

                                 {/* Rating */}
                                 <span className='flex mt-2 gap-2 items-center self-start text-orange-500'>

                                    <span className='font-bold text-xs text-black'>(5)</span>
                                    
                                    <div className='flex gap-[2px]'>
                                       { [1,2,3,4,5].map(()=>{
                                          return(<AiFillStar className='text-xs'/>)
                                       })}

                                    </div>
                                 </span>
                                 
                              </div>                       
                           

                              <p className='text-light-grey text-sm mt-2 w-[90%]'>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore, alias impedit voluptatum eaque quam quas harum velit repudiandae libero hic quis.
                              </p>
                       

                           </div>

                     </div>

                     <hr  className='border-t-[0.7px] my-4  border-solid' />

                     <div className='flex gap-3 px-4'>

                           {/* Use Avator */}
                           <BsPersonCircle className='text-5xl'/>


                           {/* Right Side */}
                           <div className=''>                            
                             
                              <div className='flex  justify-between'>

                                 {/* User and Date */}
                                 <span>
                                    <h1 className='font-semibold'>Mohammed Kedir</h1>
                                    <span className='text-sm'>December 14,2023</span>
                                 </span>

                                 {/* Rating */}
                                 <span className='flex mt-2 gap-2 items-center self-start text-orange-500'>

                                    <span className='font-bold text-xs text-black'>(3)</span>
                                    
                                    <div className='flex gap-[2px]'>
                                       { [1,2,3].map(()=>{
                                          return(<AiFillStar className='text-xs'/>)
                                       })}

                                       {[1,2].map(()=>{
                                          return(<AiOutlineStar className='text-xs' />)
                                       })}

                                    </div>
                                 </span>
                                 
                              </div>                       
                           

                              <p className='text-light-grey text-sm mt-2 w-[90%]'>
                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore, alias impedit voluptatum eaque quam quas harum velit repudiandae libero hic quis.
                              </p>
                       

                           </div>

                     </div>

                  </div>
         </div>

         </div>
         
         {/* Right Side */}
         <div className='w-[35%] flex flex-col p-6 border-slid border-[1px] self-start  rounded-lg gap-6'>

            {/* Top Section */}
            <div className='flex flex-col gap-5'>
               <div className='flex justify-between'>
               <h2 className='font-semibold'> <span className='font-bold text-3xl text-green-700'>1,499 <span className='font-light text-xs'>ETB/ <b className='font-semibold'>person</b> </span> </span> </h2>

                  <div className='flex gap-1 items-center'>
                     Rating <span className='font-semibold text-orange-500 -mr-1'>3 (2) </span> <AiFillStar className='text-orange-500' />
                  </div>

               </div>
               

               {/* <div className='border-t-[1px] border-solid border-black'>1</div> */}

               <hr  className='border-t-[0.7px]  border-solid' />
               
            </div>

            <div className='flex flex-col gap-6'>
               <h1 className='font-semibold text-[16px] '>Information</h1>

               {/* Input Fields */}
               <div className='flex flex-col justify-between gap-4 p-6  border-solid border-[1px] rounded-md'>
                  <label className='font-semibold flex flex-col gap-2'> Full Name <input placeholder='Enter your full name ...' type="text" className='font-normal   focus:outline-none  text-sm border-b-[1px] py-1' /> </label>
                  <label className='font-semibold flex flex-col gap-2'> Phone Number <input placeholder='+251 ...' type="text" className='font-normal    focus:outline-none text-sm border-b-[1px] py-1' /> </label>
                  <label className='font-semibold  flex flex-col gap-3'>No of Guests <input placeholder='Enter total passengers here ...' type="number" className='font-normal  py-1  border-b-[1px] focus:outline-none  text-sm ' /> </label>
                  <label className='font-semibold flex items-center gap-2'> Date <input placeholder='+251 ...' type="date" className='font-normal    focus:outline-none text-sm ' /> </label>
                 
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

