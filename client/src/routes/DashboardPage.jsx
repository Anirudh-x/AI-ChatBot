import React from 'react'

const DashboardPage = () => {
  return (
    <div className='h-full flex flex-col items-center'>
      <div className='flex-1 flex flex-col items-center justify-center w-[50%] gap-12'>
        <div className='flex items-center gap-5 opacity-20'>
          <img src='/logo.png' alt='' className='w-16 h-16' />
          <h1>AI ChatBot</h1>
        </div>

        <div className='w-full flex items-center justify-between gap-12'>
          <div className='flex-1 flex flex-col gap-3 p-5 border'>
            <img src='/chat.png' alt='' className='h-10 w-10 object-cover' />
            <span>Create a New Chat</span>
          </div>
          <div className='flex-1 flex flex-col gap-3 p-5 border'>
            <img src='/image.png' alt='' className='h-10 w-10 object-cover'/>
            <span>Analyze Images</span>
          </div>
          <div className='flex-1 flex flex-col gap-3 p-5 border'>
            <img src='/code.png' alt='' className='h-10 w-10 object-cover'/>
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className='mt-auto w-[50%] bg-[#2c2937] rounded-3xl flex'>
        <form className='h-full w-full flex items-center justify-between gap-5 mb-3'>
          <input type='text' placeholder='Ask me anything...' className='flex-1 p-5 bg-transparent border-none outline-none text-[#ececec]' />
          <button className='bg-[#605e68] rounded-[50%] border-none cursor-pointer p-5 flex items-center justify-center mr-5'>
            <img src='/arrow.png' alt='' className='w-4 h-4' />
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardPage