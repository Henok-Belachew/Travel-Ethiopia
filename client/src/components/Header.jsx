import React from 'react'
import Logo from '../assets/images/Logo.png'
import {BiSolidUserCircle} from 'react-icons/bi'

function Header() {
  return (
    <div className='h-[90px] bg-white shadow-md px-24 flex items-center justify-between'>
        <img src={Logo} className='h- w-[200px]' alt="" />


        <nav className='flex gap-5 items-center w-[55%] justify-between'>
            <ul className='flex gap-5 items-center w-4/6'>
                <li className='box-border w-[70px] text-orange-500 font-bold hover:text-orange-500 hover:font-bold p-1 cursor-pointer'>Home</li>
                <li className='box-border w-[70px] hover:text-orange-500 text-light-grey hover:font-bold p-1 cursor-pointer'>About</li>
                <li className='box-border w-[70px] hover:text-orange-500 text-light-grey hover:font-bold p-1 cursor-pointer'>Tour</li>
    
                <input type="text" placeholder='Search for places' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md w-full' />
            </ul>

            {false && <div className='flex gap-2'>
                <BiSolidUserCircle className='text-[50px] opacity-50 text-light-grey' />
                <div>
                    <h1 className='font-semibold'>Henok Belachew</h1>
                    <span className='text-sm '>Customer</span>
                </div>
            </div>}

            {true && <div className='flex  items-center gap-5'>
                <span className='text-sm cursor-pointer font-semibold text-light-grey hover:text-black'>Login</span>
                   
                    <button className=' text-sm px-6 py-2 rounded-lg text-white bg-orange-500 hover:bg-orange-500 font-semibold hover:text-white'>Register</button>
            </div>}

        </nav>
        


      
    </div>
  )
}

export default Header
