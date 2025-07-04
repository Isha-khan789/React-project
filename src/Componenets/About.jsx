// import React, { useState } from 'react'

const About = () => {
    // const [isVideoplaying,setisVideoplaying]=useState(false)
    // const handleVideoplay=()=>{
    //     setisVideoplaying(true)

    // }
    // const handleClosevideo=()=>{
    //     setisVideoplaying(false)
    // }
  return (
    <div id='about' className='bg-[#f7f8fc] pb-16 pt-20'>
        <div className='container mx-auto'>
            <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
                <div className='md:w-1/2 w-full mb-8 md:mb-0'>
                    left side
                </div>
                <div className='md:w-1/2 w-full'>
                    right side
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default About
