import React, { useEffect, useRef } from "react";

const NewPrompt = () => {

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "smooth"});
  }, []);

  return (
    <div>
      <div className='pb-[7rem]' ref={endRef}></div>
      <form className='w-[50%] absolute bottom-0 bg-[#2c2937] rounded-3xl flex items-center gap-5 px-5'>
        <label htmlFor='file' className='rounded-[50%] bg-[#605e68] border-none p-[10px] flex items-center justify-center cursor-pointer'>
          <img src='/attachment.png' className='w-4 h-4'/>
        </label>
        <input id='file' type='file' multiple={false} hidden />

        <input type='text' placeholder='Ask me here...' className='flex-1 p-5 border-none outline-none bg-transparent text-[#ececec]' />
        <button className='rounded-[50%] bg-[#605e68] border-none p-[10px] flex items-center justify-center cursor-pointer'>
          <img src='/arrow.png' className='w-4 h-4'/>
        </button>
      </form>
    </div>
  )
}

export default NewPrompt