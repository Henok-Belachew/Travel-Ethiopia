import React from 'react'
import img1 from '../assets/images/adj-1.jpg'
import img2 from '../assets/images/adj-2.jpg'
import img3 from '../assets/images/adj-3.jpg'
import { IoLocationOutline } from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
import {GiPathDistance} from 'react-icons/gi'

function Heron() {
  return (
    <div className='px-96 my-8 h-[350px] flex items-center'>
        {/* ========== Left Side ==========*/}
        <div className='w-1/2 flex flex-col gap-5'>
            <span className='p-2 text-xs px-4 font-great font-[500] text-white rounded-[100px] bg-green-400 self-start'>Know before you go!</span>
            <h1 className='font-semibold text-3xl'>
            Explore the enchanting wonders <br /> of Ethiopia.
            </h1>
            <p className='w-[80%] opacity-70'>
            Immerse yourself in a land where ancient history meets vibrant culture, where breathtaking landscapes and warm hospitality await your journey of discovery.
            </p>

            <div className='shadow-lg p-3 gap-1 flex items-center justify-between rounded-lg w-[85%]'>
                <div className='flex items-center'>
                  {/* Icon here */}
                  <IoLocationOutline className='w-[40px] font-bold text-green-500 text-2xl'/>
                  <div className='flex flex-col'>
                    <span className='font-semibold opacity-70'>Location</span>
                    <input type="text" placeholder='Place to go ?' className='text-sm focus:outline-none py-' />
                  </div>
                </div>

                <div className='w-[1px] h-[44px] bg-black opacity-40'></div>

                <div className='flex items-center'>
                  {/* Icon here */}
                  <GiPathDistance className='w-[40px] font-bold text-green-500 text-2xl'/>
                  <div className='flex flex-col'>
                    <span className='font-semibold opacity-70'>Distance</span>
                    <input type="text" placeholder='Distance in Km' className='text-sm focus:outline-none py-' />
                  </div>
                </div>

                <button className='bg-green-500 p-3 self-stretch rounded-lg text-white'>
                      <AiOutlineSearch/>
                </button>
            </div>

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
