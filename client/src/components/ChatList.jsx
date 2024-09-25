import React from 'react'
import { Link } from 'react-router-dom'

const ChatList = () => {
  return (
    <div className='flex flex-col h-full'>
      <span>DASHBOARD</span>
      <Link to="/dashboard"className='p-3 rounded-2xl hover:bg-[#2c2937]' >Create a new Chat</Link>
      <Link to="/" className='p-3 rounded-2xl hover:bg-[#2c2937]'>Explore ChatBot</Link>
      <Link to="/" className='p-3 rounded-2xl hover:bg-[#2c2937]'>Contact Us</Link>
      <hr className='border-none' />

      <span className='mb-[1rem]'>Recent Chats</span>
      <div className='flex flex-col overflow-scroll'>
        <Link to="/" className='p-3 rounded-2xl hover:bg-[#2c2937]'>My Chat Title</Link>
        <Link to="/" className='p-3 rounded-2xl hover:bg-[#2c2937]'>My Chat Title</Link>
        <Link to="/" className='p-3 rounded-2xl hover:bg-[#2c2937]'>My Chat Title</Link>
        <Link to="/" className='p-3 rounded-2xl hover:bg-[#2c2937]'>My Chat Title</Link>
        <Link to="/" className='p-3 rounded-2xl hover:bg-[#2c2937]'>My Chat Title</Link>
      </div>
      <hr />

      <div className='mt-auto flex items-center gap-3'>
        <img src='./logo.png' alt='' className='w-6 h-6' />
        <div className='flex flex-col'>
          <span className='font-[600]'>Upgrade to ChatBot Pro</span>
          <span className='text-[#888]'>Get more features and support</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList