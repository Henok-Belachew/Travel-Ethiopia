import React from 'react'

import { NavLink } from 'react-router-dom'
import {BsFillPersonPlusFill} from 'react-icons/bs'

function Register() {
  return (
    <div className=' my-6 w-fit mx-auto px-12 pb-6 pt-1 rounded-lg '>

        <div className='relative block mx-auto w-[320px]'>
        <BsFillPersonPlusFill className='text-6xl mx-auto'/>
        <h1 className='font-bold text-xl text-left mt-6 leading-[18px]'>Registering</h1>
        <span className='text-sm text-light-grey'>Fill the forms below to complete.</span>

            <div className='mt-4 flex flex-col gap-4'>
            <div className='flex gap-1 justify-center flex-col'>
                <span className='font-semibold'>Username</span>
                <input placeholder='Username ...' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md' type="text" />
            </div>

            <div className='flex gap-1 justify-center flex-col'>
                <span className='font-semibold'>Email</span>
                <input placeholder='Username ...' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md' type="email" />
            </div>

            <div className='flex gap-1 justify-center flex-col'>
                <span className='font-semibold'>Password</span>
                <input placeholder='Password ...' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md' type="password" />
               
            </div>

            <button className='bg-green-100 border-[1px] mt-6 border-green-700 hover:bg-green-500  hover:text-white rounded-md font-semibold text-black py-2'>Create Account</button>
            <span className='self-center text-sm op'>Already have an account ? <NavLink to="/login" ><span className='font-semibold text-green-500 cursor-pointer opacity-100'> <span className='opacity-70 hover:opacity-100 hover:font-bold'>Log In</span> </span></NavLink>  </span>

            </div>

            

        </div>
        
      


    </div>
  )
}

export default Register
