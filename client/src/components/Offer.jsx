import React from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {GiRomanToga} from 'react-icons/gi'
import {FaChessBoard} from 'react-icons/fa'

function Offer() {
  return (
    <div className='flex gap-3 px-96 py-12'>
      <div className='flex flex-col gap-3 w-1/4 justify-center'>
      <span className='p-2 text-xs px-4 font-great font-[500] text-white rounded-[100px] bg-green-500 self-start'>Our What we offer!</span>
            <h1 className='font-semibold self-center justify-center text-3xl'>We offer our best services.</h1>
      </div>
      <div className='w-1/4 flex flex-col gap-5 rounded-lg shadow-md p-6'>
        <span className='bg-green-200 rounded-full h-[50px] w-[50px] flex items-center justify-center'><TiWeatherPartlySunny className='text-green-500 text-2xl'/></span>

        <div>
            <h1 className='font-semibold'>Calculate Weather</h1>
            <p className='opacity-70 text-[13px]'>Get real-time weather updates and forecasts for your travel destinations to plan your trips effectively.</p>

        </div>
        
      </div>
      <div className='w-1/4 flex flex-col gap-5 rounded-lg shadow-md p-6'>
        <span className='bg-green-200 rounded-full h-[50px] w-[50px] flex items-center justify-center'><FaChessBoard className='text-green-500 text-2xl'/></span>

        <div>
            <h1 className='font-semibold'>Customization</h1>
            <p className='opacity-70 text-[13px]'>Tailor your travel experiences with personalized accommodations, and activities based on your preferences.</p>

        </div>
        
      </div>
      <div className='w-1/4 flex flex-col gap-5 rounded-lg shadow-md p-6'>
        <span className='bg-green-200 rounded-full h-[50px] w-[50px] flex items-center justify-center'><GiRomanToga className='text-green-500 text-2xl'/></span>

        <div>
            <h1 className='font-semibold'>Best Tour Guide</h1>
            <p className='opacity-70 text-[13px]'>Connect with experienced local guides who can enhance your travel experience with insider knowledge.</p>

        </div>
        
      </div>
      
    </div>
  )
}

export default Offer
