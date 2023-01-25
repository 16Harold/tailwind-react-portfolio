import React from 'react'

const Contact = () => {
  return (
    <div id='contact' name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
         <form method='POST' action='https://getform.io/f/eb1deb89-1785-45ae-b874-e8a29b255e71' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#18b8c1] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - hgkennelhar@gmail.com</p>
            </div>
            <input className='my-4 p-2'  name='name' type='text' placeholder='Name'/>
            <input className='my-4 p-2' name='email' type='email' placeholder='Email'/>
            <textarea className='my-4 p-2' name='message' rows='10' placeholder='Message'/>
            <button className='text-gray-300 border-2 border-[#18b8c1] hover:bg-[#18b8c1] hover:border-[#ccd6f6] px-4 py-3'>Lets Collaborate</button>
         </form>
    </div>
  )
}

export default Contact