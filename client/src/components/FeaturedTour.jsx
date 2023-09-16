import React from 'react'
import place1 from '../assets/images/img-1.jpg'
import place2 from '../assets/images/img-2.jpg'
import place3 from '../assets/images/img-3.png'
import place4 from '../assets/images/img-4.png'
import { IoLocationOutline } from 'react-icons/io5'
import {AiFillStar} from 'react-icons/ai'

function TourCard({place}) {
    return(
        <div className=' w-[250px] rounded-lg shadow-md overflow-hidden'>
            <img src={place} className='object-cover h-[166px] ' alt="" />

            <div className='px-3 py-3 rounded-b-md overflow-hidden flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <span className='flex gap-1 items-center'>
                        <IoLocationOutline className='text-green-500' /> 
                        <span className='font-semibold'>Hawassa</span>
                    </span>

                    <span className='flex gap-1 items-center'>
                    <AiFillStar className='text-green-500' />

                    Not rated!

                    </span>
                </div>

                <h1 className='font-semibold text-base'>Hawassa National Park</h1>

                <div className='flex justify-between mt-2'>
                    <h1 className='text-sm flex items-center gap-1'> <span className='font-semibold text-lg text-green-500'>234</span>ETB</h1>

                    <button className='px-3 py-2 bg-green-500 text-whiet font-bold text-sm rounded-lg text-white'>
                        Book Now
                    </button>
                </div>
            </div>

        </div>
    )
}

function FeaturedTour() {
  return (
    <div className='px-96 py-12  mx-auto'>
        <span className='p-2 text-xs px-4 font-great font-[500] text-white rounded-[100px] bg-green-500 self-start'>Our Featured</span> 
        <h1 className='font-semibold text-2xl mt-5'>Featured Tours</h1>


        {/* Featured Tours Cards */}
        <div className='flex flex-row mt-5 justify-between gap-5 flex-wrap'>
            
        <TourCard place={place1}/>
        <TourCard place={place2}/>
        <TourCard place={place3}/>
        <TourCard place={place4}/>
    
        </div>
      
    </div>
  )
}

export default FeaturedTour
