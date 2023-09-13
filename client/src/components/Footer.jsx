import React from 'react'
import Logo from '../assets/images/Logo.png'

function Footer() {
  return (
    <div className='flex justify-between gap-10 bg-white px-24'>
        <div className='bg-red-700 w-1/4'>
            <img src={Logo} className='w-[70%] block' alt="" />

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis nesciunt nemo in iure pariatur atque deserunt vel tempore assumenda.

        </div>
        <div className='bg-red-700 w-1/4'>d</div>
        <div className='bg-red-700 w-1/4'>d</div>
        <div className='bg-red-700 w-1/4'>d</div>
      
    </div>
  )
}

export default Footer
