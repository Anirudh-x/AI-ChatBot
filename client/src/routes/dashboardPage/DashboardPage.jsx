import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;

    mutation.mutate(text);
  };
  return (
    <div className="h-full flex flex-col items-center p-5">
      <div className="flex-1 flex flex-col items-center justify-center w-[50%] gap-12">
        <div className="flex items-center gap-5 opacity-20">
          <img src="/logo.png" alt="" className="w-[4rem] h-[4rem]" />
          <h1 className="text-[4rem] bg-white text-transparent bg-clip-text">
            AI ChatBot
          </h1>
        </div>

      </div>
      <div className="mt-auto w-[50%] bg-[#2c2937] rounded-3xl flex">
        <form onSubmit={handleSubmit} className="w-full h-full flex items-center justify-between gap-5 mb-3">
          <input type="text" name="text" placeholder="Ask me anything..." className=" flex-1 py-4 px-3 bg-transparent border-none outline-none text-#ececec" />
          <button className="bg-[#605e68] rounded-[50%] border-none cursor-pointer p-3 flex items-center justify-center mr-5">
            <img src="/arrow.png" alt="" className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
