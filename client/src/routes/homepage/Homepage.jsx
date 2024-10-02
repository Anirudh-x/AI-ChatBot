import { Link } from "react-router-dom";

const Homepage = () => {

  return (
    <div className="flex items-center gap-24 h-full">
      
      <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-[8rem] text-white">AI ChatBot</h1>
        <h3 className="max-w-[70%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <Link to="/dashboard" className="py-4 px-6 bg-white text-black font-bold hover:bg-slate-500 hover:text-white rounded-3xl text-lg mt-5">Get Started</Link>
      </div>
      

      <div className="absolute bottom-5 left-[50%] translate-x-[-50%] flex flex-col items-center gap-5">
        <img src="/logo.png" alt="" className="w-4 h-4"/>
        <div className="flex gap-3 text-gray-500 text-xs">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
