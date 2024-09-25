import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='flex items-center gap-[6.5rem] h-full'>
      <img src='' alt='background' className='absolute bottom-0 left-0 opacity-0.05'/>
      <div className='flex-1 flex flex-col items-center justify-center gap-4 text-center'>
        <h1>AI ChatBot</h1>
        <h2>Lorem Ipsum something something</h2>
        <h3>Lorem Ipsum something something, Lorem Ipsum something something. Lorem Ipsum something something, Lorem Ipsum something something.</h3>
        <Link to="/dashboard" className='bg-red-500'>Get Started</Link>
      </div>

      <div className='flex-1 flex items-center justify-center h-full'>
        <div className='flex items-center justify-center bg-[#140e2d] rounded-[3rem] w-[80%] h-[50%]'>
          <div className='w-full h-full overflow-hidden absolute top-0 left-0 rounded-[50px]'>
            <div className='opacity-20 w-[200%] h-full'>
            </div>
          </div>
          <img src='' alt='right-img' className='w-full h-full object-contain' />
        </div>
      </div>
    </div>
  )
}

export default HomePage