import React from 'react'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/* container */}
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
              <p className='text-[#18b8c1]'>Hi, my name is</p>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Harold Lopez</h2>
              <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
              <p className='text-[#18b8c1] py-4 max-w-[700px]'>I'm a fullstack developer specializing in building (and occasionally designing) digital experiences. Currently, I'm focused on building responsive full-stack web application</p>
              {/* <div>
                <button className='text-[#ccd6f6] border-2 border-[#18b8c1] py-2 px-3 my-2 flex items-center hover:bg-[#18b8c1] hover:border-[#ccd6f6] '>View Work</button>
              </div> */}
         </div>

    </div>
  )
}

export default Home
