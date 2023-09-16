import React from 'react'
import ava1 from '../assets/images/ava-1.jpg'
import ava2 from '../assets/images/ava-2.jpg'
import ava3 from '../assets/images/ava-3.jpg'



function CommentCard({img}){
    return(
        <div className='flex flex-col gap-3 rounded-lg'>
            <p className='text-[14px] opacity-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus modi ratione omnis maiores tempore blanditiis officiis, sint natus. Reprehenderit recusandae nisi enim dolore.</p>

            <div className='flex gap-3 items-center'>
                <img src={img} className='w-[100px] rounded-md' alt="" />
                <div>
                    <h1 className='font-semibold'>Henok Belachew</h1>
                    <span className='opacity-70'>Customer</span>
                </div>
            </div>


        </div>
    )
    
}

function Comments() {
  return (
    <div className='px-96 py-12'>
        <span className='p-2 text-xs px-4 font-great font-[500] text-white rounded-[100px] bg-green-500 self-start'>Our Fans Love</span> 
        <h1 className='font-semibold text-2xl mt-3'>What our fans saying about us.</h1>


        {/* Comments Container */}
        <div className='flex gap-5 mt-5'>
                <CommentCard img={ava1} />
                <CommentCard img={ava2}/>
                <CommentCard img={ava3}/>
        </div>
      
    </div>
  )
}

export default Comments

