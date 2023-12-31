import React from 'react'
import Logo from '../assets/images/Logo.png'
import { NavLink } from 'react-router-dom'


function Login() {
  return (
    <div className=' my-6 w-fit mx-auto px-12 pb-6 pt-1 rounded-lg '>

        <div className='relative block mx-auto w-[320px]'>
        <img src={Logo} className='w-[70%] mx-auto mb-6' alt="" />
        <h1 className='font-bold text-2xl'>Welcome!</h1>
        <span>Log in to continue.</span>

            <div className='mt-4 flex flex-col gap-4'>
            <div className='flex gap-1 justify-center flex-col'>
                <span className='font-semibold'>Username</span>
                <input placeholder='Username ...' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md' type="text" />
            </div>

            <div className='flex gap-1 justify-center flex-col'>
                <span className='font-semibold'>Password</span>
                <input placeholder='Password ...' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md' type="password" />
                <span className='text-xs self-end opacity-70 cursor-pointer hover:font-semibold hover:opacity-100'>Forgot Password ?</span>
            </div>

            <button className='bg-green-100 border-[1px] border-green-700 hover:bg-green-500  hover:text-white rounded-md font-semibold text-black py-2'>Log In</button>
            <span className='self-center text-sm op'>Don't have account ? <NavLink to="/register"><span className='font-semibold text-green-500 cursor-pointer opacity-100'> <span className='opacity-70 hover:opacity-100 hover:font-bold'>Register</span> </span> </NavLink>  </span>

            </div>

            

        </div>
        
      


    </div>
  )
}

export default Login
