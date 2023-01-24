import React from 'react'
import Bs from '../assets/bs.png'
import Css from '../assets/css.png'
import Html from '../assets/html.png'
import Js from '../assets/js.png'
import Njs from '../assets/node.png'
import Ps from '../assets/ps.png'
import Rjs from '../assets/react.png'
import Tw from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300' >
        
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#18b8c1] '>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
      
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Html} alt='Html icon' className='w-20 mx-auto' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Css} alt='Css icon' className='w-20 mx-auto' />
                    <p className='my-4'>CSS</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Js} alt='Javascript icon' className='w-20 mx-auto' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Tw} alt='Tailwind icon' className='w-20 mx-auto' />
                    <p className='my-4'>TAILWIND</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Bs} alt='Bootstrap icon' className='w-20 mx-auto' />
                    <p className='my-4'>BOOTSTRAP</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Rjs} alt='ReactJs icon' className='w-20 mx-auto' />
                    <p className='my-4'>REACT JS</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Njs} alt='NodeJs icon' className='w-20 mx-auto' />
                    <p className='my-4'>NODE JS</p>
                </div>
                
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={Ps} alt='Photoshop icon' className='w-20 mx-auto' />
                    <p className='my-4'>PHOTOSHOP</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills