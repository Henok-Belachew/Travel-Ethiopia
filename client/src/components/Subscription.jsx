import React from 'react'
import man from '../assets/images/man.png'

function Subscription() {
  return (
    <div className='flex justify-between relative bg-orange-100'>

        <div className='w-[40%] py-12 pl-96 flex flex-col gap-6'>
            <h1 className='font-semibold text-2xl'>Subscribe now to receive valuable travel <br /> insights and information.</h1>

            <div className='bg-white flex items-center justify-between px-2 rounded-md'>
                <input type="text" placeholder='Enter your email here ...' className='focus:outline-none p-3' />

                <button className='px-4 py-2 text-sm  bg-orange-500 rounded-md font-semibold text-white'>Subscribe</button>
            </div>

            <p className='leading-[20px] opacity-70'>Join our travel community today to stay updated with the latest travel trends. Make your journeys memorable by accessing exclusive tips and deals.</p>
        </div>

        <div className='relative w-1/2'>
            <img className='w-[430px] right-[180px] absolute bottom-0 text-center mx-auto block' src={man} alt="" />
        </div>

  
            
 
        
      
    </div>
  )
}

export default Subscription
