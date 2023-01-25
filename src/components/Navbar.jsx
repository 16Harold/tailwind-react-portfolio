import React, {useState} from 'react'
import Logo from '../assets/logo.gif'
import Dd from '../assets/dd.png'
import Close from '../assets/close.png'
import {Link} from 'react-scroll'
import Linkedin from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Mail from '../assets/email.png'
import Fb from '../assets/fb.png'


const Navbar = () => {
    const [nav, setNav] = useState (false)
    const handleClick = () => setNav (!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
       <div>
           <img src={Logo} alt="Logo Gif" style={{width: '100px'}} />
       </div>
       {/* menu */}
           <ul className='hidden md:flex'>
               <li>
                  <Link to="home" smooth={true} duration={500}>
                   Home
                  </Link>
               </li>           
               <li>
                  <Link to="about" smooth={true} duration={500}>
                   About
                  </Link>
               </li>           
               <li>
                  <Link to="skills" smooth={true} duration={500}>
                   Skills
                  </Link>
               </li>           
               <li>
                  <Link to="projects" smooth={true} duration={500}>
                   Projects
                  </Link>
               </li>           
               <li>
                  <Link to="contact" smooth={true} duration={500}>
                   Contact
                  </Link>
               </li>           
           </ul>
       
       {/* Hamburger */}
       <div onClick={handleClick} className='md:hidden z-10'>
           {!nav ? <img src={Dd} alt="Dropdown Menu" style={{width: '50px'}} /> : <img src={Close} alt="Dropdown Menu" style={{width: '50px'}} />}
       </div>
       
       {/* mobile menu */}
           <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
               <li className='py-6 text-xl'>
                  <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                    Home
                  </Link>
               </li>           
               <li className='py-6 text-xl'>
                   <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                    About
                   </Link>
               </li>           
               <li className='py-6 text-xl'>
                   <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                    Skills
                   </Link>
               </li>           
               <li className='py-6 text-xl'>
                   <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                    Projects
                   </Link>
               </li>           
               <li className='py-6 text-xl'>
                  <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                   Contact
                  </Link>
               </li>           
           </ul>
       
       {/* Social Icons */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
         <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ccd6f6]'>
                <a className='flex justify-between items-center text-gray-800 font-bold'
                href="https://www.linkedin.com/in/harold-lopez-0a4473252/">
                    Linkedin
                </a>
                <img src={Linkedin} alt="linkedin"  className='px-4'/> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8892b0]'>
                <a className='flex justify-between items-center text-gray-800 font-bold'
                href="https://github.com/16Harold">
                    Github
                </a>
                <img src={Github} alt="github"  className='px-7'/> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a className='flex justify-between items-center text-gray-800 font-bold'
                href="#contact">
                    Email
                </a>
                <img src={Mail} alt="email"  className='px-9'/> 
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#18b8c1]'>
                <a className='flex justify-between items-center text-gray-800 font-bold'
                href="https://www.facebook.com/hgharold.lopez">
                    Facebook
                </a>
                <img src={Fb} alt="facebook logo"  className='px-2'/> 
            </li> 
         </ul>
       </div>

    </div>
  )
}

export default Navbar