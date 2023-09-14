import React from 'react'
import Experience from '../assets/images/experience.png'

function Exprience() {
  return (
    <div className='flex justify-between'>
        {/* ========== Left Side ========== */}
        <div className='w-1/2 px-96 py-12 flex flex-col gap-5'>
        <span className='p-2 text-xs px-4 font-great font-[500] text-white rounded-[100px] bg-orange-500 self-start'>Our Expriences</span>
            <h1 className='font-semibold text-2xl'>We will leverage our wealth of experience <br /> to serve you better.</h1>
            <p className='opacity-70'>
            Our extensive experience is your assurance of exceptional service. Count on us to deliver top-notch solutions tailored to your needs.
            </p>

            <div className='flex gap-6 w-[80%] justify-between'>
                <div className='flex w-[100px] text-center gap-2 items-center flex-col'>
                    <div  className='w-[80px] flex  justify-center h-[80px] items-center text-center box-border text-lg bg-orange-500 text-white font-semibold rounded-md'>
                        <span className='font-bold text-xl'>12K+</span>
                    </div>
                    <span className='text-sm opacity-70 font-semibold'>Satisfied Customers</span>
                </div>

                <div className='flex w-[100px] text-center gap-2 items-center flex-col'>
                    <div  className='w-[80px] flex  justify-center h-[80px] items-center text-center box-border text-lg bg-orange-500 text-white font-semibold rounded-md'>
                        <span className='font-bold text-xl'>4+</span>
                    </div>
                    <span className='text-sm opacity-70 font-semibold'>Years of Operation</span>
                </div>

                <div className='flex w-[100px] text-center gap-2 items-center flex-col'>
                    <div  className='w-[80px] flex justify-center   h-[80px] items-center text-center box-border text-lg bg-orange-500 text-white font-semibold rounded-md'>
                        <span className='font-bold text-xl'>8+</span>
                    </div>
                    <span className='text-sm opacity-70 font-semibold'>Awards and Recognition</span>
                </div>

            </div>
        </div>


        {/* ========== Image Side ==========*/}
        <div className='w-1/2 flex items-center'>
            <img src={Experience} className='block mx-auto w-[60%]' alt="" />

        </div>
      
    </div>
  )
}

export default Exprience
