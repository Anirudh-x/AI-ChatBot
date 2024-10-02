import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const ChatList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["userChats"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: "include",
      }).then((res) => res.json()),
  });

  return (
    <div className="flex flex-col h-full">
      <span className="font-semibold text-[10px]">DASHBOARD</span>
      <Link className="p-[10px] rounded-xl hover:bg-[#2c2937]" to="/dashboard">Create a new Chat</Link>
      <Link className="p-[10px] rounded-xl hover:bg-[#2c2937]" to="/">Contact</Link>
      <hr className="border-none h-[2px] bg-[#ddd] opacity-10 rounded-md my-[20px]"/>
      <span className="font-semibold text-[10px] mb-[10px]">RECENT CHATS</span>
      <div className="flex flex-col overflow-scroll">
        {isPending
          ? "Loading..."
          : error
          ? "Something went wrong!"
          : data?.map((chat) => (
              <Link className="p-[10px] rounded-xl hover:bg-[#2c2937]" to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))}
      </div>
      <hr className="border-none h-[2px] bg-[#ddd] opacity-10 rounded-md my-[20px]"/>
      <div className="mt-auto flex items-center gap-3 text-[12px]">
        <img src="/logo.png" alt="" className="h-6 w-6" />
        <div className="flex flex-col">
          <span className="text-white opacity-50">AI ChatBot</span>
          <span className="text-white opacity-10">Uses Gemini API</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
