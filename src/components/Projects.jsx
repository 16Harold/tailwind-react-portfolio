import React from 'react'
import ProjectImg from '../assets/project.png'
import LakoImg from '../assets/lakoProj.png'
import MlconverterImg from '../assets/ml-converter.png'
import BmiImg from '../assets/bmi.png'
import WeightConImg from '../assets/weight-con.png'
import OlibImg from '../assets/o-lib.png'
import Bp from '../assets/bootstrap-portfolio.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full text-gray-300 bg-[#0a192f] md:h-screen'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#18b8c1]'>PROJECTS</p>
                <p className='py-6'>Check out some of my projects</p>
            </div>
        {/*card container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4  '>
             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${LakoImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold  text-[#18b8c1] tracking-wider bg-[#0a192f] rounded-sm py-1 px-2'>
                       MERN Application
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='https://lakofronttest.onrender.com/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}

             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${ MlconverterImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold bg-[#0a192f] text-[#18b8c1] tracking-wider '>
                       Html, Css, Javascript Application
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='https://16harold.github.io/Multiple-Lenght-Converter/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='https://github.com/16Harold/Multiple-Lenght-Converter'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}
             
             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${BmiImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold text-[#18b8c1] tracking-wider'>
                       Html, Css, Javascript Application
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='https://16harold.github.io/BMI-Calculator/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='https://github.com/16Harold/BMI-Calculator'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}

             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${WeightConImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f] '>
                       <span className='text-2xl font-bold text-[#18b8c1] tracking-wider'>
                       Html, Css, Javascript Application
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='https://16harold.github.io/weight-calculator/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>link</button> 
                           </a>
                           <a href='https://github.com/16Harold/weight-calculator'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}

             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${OlibImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold text-[#18b8c1] tracking-wider'>
                       Html, Css
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='https://16harold.github.io/Online-Lib/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='https://github.com/16Harold/Online-Lib'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}
             
             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${Bp})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold text-[#18b8c1] tracking-wider'>
                       Html, Css, Bootstrap Application
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='https://16harold.github.io/bootstrap-portfolio/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='https://github.com/16Harold/bootstrap-portfolio'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}
             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${ProjectImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold text-[#18b8c1] tracking-wider'>
                       Coming soon...
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}
             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${ProjectImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold text-[#18b8c1] tracking-wider'>
                       Coming soon...
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}
             {/*Grid Items  */}
                <div style={{ backgroundImage:`url(${ProjectImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center bg-[#0a192f]'>
                       <span className='text-2xl font-bold text-[#18b8c1] tracking-wider'>
                       Coming soon...
                       </span>
                       <div className='pt-8 text-center'>
                           <a href='/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Link</button> 
                           </a>
                           <a href='/'>
                              <button className='text-center rounded-lg px-4 py-1 m-2 bg-[#18b8c1] text-gray-700 font-bold text-lg'>Code</button> 
                           </a>
                       </div>
                    </div>
                </div>
             {/*end of grid items  */}
            </div>
         </div>  
    </div>
  )
}

export default Projects
