import React from 'react'
import img1 from '../assets/images/adj-1.jpg'
import img2 from '../assets/images/adj-2.jpg'
import img3 from '../assets/images/adj-3.jpg'

function Heron() {
  return (
    <div className='px-96 h-[350px] flex items-center'>
        {/* ========== Left Side ==========*/}
        <div className='w-1/2 flex flex-col gap-5'>
            <span className='p-2 text-xs px-4 font-great font-[500] text-white rounded-[100px] bg-orange-400 self-start'>Know before you go!</span>
            <h1 className='font-semibold text-3xl'>
            Explore the enchanting wonders <br /> of Ethiopia.
            </h1>
            <p className='w-[80%] opacity-70'>
            Immerse yourself in a land where ancient history meets vibrant culture, where breathtaking landscapes and warm hospitality await your journey of discovery.
            </p>

        </div>



        {/* ========== Right Side ==========*/}
        <div className='flex gap-6 h-[80%]'>

          <img src={img1} className='shadow-md self-end h-[250px] object-cover w-[150px] rounded-lg' alt="" />

          <img src={img2} className='shadow-md self-start h-[250px] object-cover w-[150px] rounded-lg' alt="" />

          <img src={img3} className='shadow-md self-end h-[250px] object-cover w-[150px] rounded-lg' alt="" />

        </div>
      
    </div>
  )
}

export default Heron
