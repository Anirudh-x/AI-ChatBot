import React from "react";
import NewPrompt from "../components/NewPrompt";

const ChatPage = () => {

  return (
    <div className="h-full flex flex-col items-center relative">
      <div className="flex-1 overflow-scroll w-full flex justify-center">
        <div className="w-[50%] flex flex-col">
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>
          <div className="p-[20px]">From AI</div>
          <div className="p-[20px] bg-[#2c2937] rounded-3xl max-w-[80%] self-end ">
            From User
          </div>

          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
