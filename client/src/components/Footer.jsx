import React from 'react'
import Logo from '../assets/images/Logo.png'
import {AiOutlineTwitter, AiOutlineMail, AiOutlinePhone, AiFillFacebook, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

function Footer() {
  return (
    <div className='flex justify-between gap-10  py-[40px] px-96'>
        <div className=' w-1/4 flex flex-col gap-2'>
            <img src={Logo} className='w-[70%] block' alt="" />
            <span className='leading-[18px] opacity-70 text-[16px]'>
            Stay connected with us through our social media channels.

            </span>
          
            <div className='flex gap-7 mt-3 text-[20px]'>
              <AiOutlineTwitter className='opacity-50 hover:opacity-100 cursor-pointer'/>
              <AiFillFacebook className='opacity-50 hover:opacity-100 cursor-pointer'/>
              <AiFillInstagram className='opacity-50 hover:opacity-100 cursor-pointer'/>
              <AiFillYoutube className='opacity-50 hover:opacity-100 cursor-pointer'/>
            </div>

        </div>
        <div className=' w-1/4'>
          <h1 className='font-bold'>Discover</h1>
          <ul className='mt-5 opacity-70 flex flex-col gap-2 text-[16px]'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>Tour</li>
            <li className='hover:font-bold cursor-pointer'>About</li>
          </ul>
          
          
        </div>
        <div className='w-1/4'>
        <h1 className='font-bold'>Quick Links</h1>
          <ul className='mt-5 opacity-70 flex flex-col gap-2 text-[16px]'>
            <li className='hover:font-bold cursor-pointer'>Gallery</li>
            <li className='hover:font-bold cursor-pointer'>Login</li>
            <li className='hover:font-bold cursor-pointer'>Register</li>
          </ul>
        </div>
        <div className='w-1/4'>
          <h1 className='font-bold'>Contact</h1>

          <div className='mt-5 flex flex-col gap-1'>
              <div className='flex gap-4 items-center'>
                <span className='font-semibold flex gap-2 items-center text-[16px]'>
                <IoLocationOutline className='text-green-500'/>
                Address:
                </span>

                <span className='text-[16px] opacity-70'>
                  Addis Ababa, Ethiopia
                </span>
                
              </div>

              <div className='flex gap-4 items-center'>
                <span className='font-semibold flex gap-2 items-center text-[16px]'>
                <AiOutlinePhone className='text-green-500'/>
                Phone:
                </span>

                <span className='text-[16px] opacity-70'>
                  0115534453
                </span>
                
              </div>

              <div className='flex gap-4 items-center'>
                <span className='font-semibold flex gap-2 items-center text-sm'>
                <AiOutlineMail className='text-green-500'/>
                Email:
                </span>

                <span className='text-sm opacity-70'>
                  TravelEthiopia@gmail.com
                </span>
                
              </div>
          </div>
        </div>
      
    </div>
  )
}

export default Footer
