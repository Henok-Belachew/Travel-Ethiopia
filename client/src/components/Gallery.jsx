import React from 'react'
import img1 from '../assets/images/img-1.jpg'
import img2 from '../assets/images/img-2.jpg'
import img3 from '../assets/images/img-3.png'
import img4 from '../assets/images/img-4.png'
import img5 from '../assets/images/img-5.png'
import img6 from '../assets/images/img-6.png'
import img7 from '../assets/images/img-7.png'
import img8 from '../assets/images/img-8.jpg'
import img9 from '../assets/images/img-9.jpg'
import img10 from '../assets/images/img-10.jpg'
import img11 from '../assets/images/img-11.jpg'
import img12 from '../assets/images/img-12.jpg'
import img13 from '../assets/images/img-13.jpg'


  



function Gallery() {
  return (
    <div className='px-96 flex flex-col gap-5 py-8'>
        <span className='p-2 text-xs px-4 font-great font-[500] text-white rounded-[100px] bg-green-500 self-start'>Our Gallery</span> 
        <h1 className='font-semibold text-2xl'>Visit our customers tour gallery.</h1>


        {/* Images */}
        <div className='flex mx-auto gap-2 flex-wrap justify-center items-start'>
            <div className="flex flex-col gap-2">
            <img src={img1} className='w-[250px] rounded-lg' alt="" />
            <img src={img12} className='w-[250px] rounded-lg' alt="" />
            <img src={img2} className='w-[250px] rounded-lg' alt="" />
            

            </div>

            <div className="flex flex-col gap-2">
            <img src={img5} className='w-[250px] rounded-lg' alt="" />
            <img src={img6} className='w-[250px] rounded-lg' alt="" />
            <img src={img7} className='w-[250px] rounded-lg' alt="" />
            
<img src={img13} className='w-[250px] rounded-lg' alt="" />
            


            </div>

            <div className="flex flex-col gap-2">
            <img src={img10} className='w-[250px] rounded-lg' alt="" />

<img src={img11} className='w-[250px] rounded-lg' alt="" />




            </div>

            <div className="flex flex-col gap-2">
            <img src={img1} className='w-[250px] rounded-lg' alt="" />
            <img src={img12} className='w-[250px] rounded-lg' alt="" />
            <img src={img2} className='w-[250px] rounded-lg' alt="" />
            

            </div>



  

        </div>
        
        
      
    </div>
  )
}

export default Gallery
