import React from 'react'
import Logo from '../assets/images/Logo.png'


function Login() {
  return (
    <div className=' my-6 w-fit mx-auto px-12 pb-6 pt-1 rounded-lg '>

        <div className='relative block mx-auto w-[320px]'>
        <img src={Logo} className='w-[70%] mx-auto mb-6' alt="" />
        <h1 className='font-bold text-2xl'>Welcome!</h1>
        <span>Log in to continue</span>

            <div className='mt-4 flex flex-col gap-4'>
            <div className='flex gap-1 justify-center flex-col'>
                <span className='font-semibold'>Username</span>
                <input placeholder='Username ...' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md' type="text" />
            </div>

            <div className='flex gap-1 justify-center flex-col'>
                <span className='font-semibold'>Password</span>
                <input placeholder='Password ...' className='focus:outline-none border-solid text-sm border-light-grey border-[1px] px-2 py-2 rounded-md' type="password" />
                <span className='text-xs self-end opacity-70'>Forgot Password ?</span>
            </div>

            <button className='bg-orange-200 opacity-100 text-white hover:opacity-100 font-semibold hover:bg-orange-500 hover:text-white mt-4 py-2 rounded-lg'>Log In</button>

            </div>

            

        </div>
        
      


    </div>
  )
}

export default Login
