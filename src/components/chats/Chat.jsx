import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(false);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  function handleOpen() {
    setOpen((prev) => !prev);
  }
  const hndleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  return (
    <div className="flex-2 flex flex-col border-white/30 border-l border-r">
      <div className="flex w-full border-b border-white/30 justify-between items-center p-4">
        <div className="flex gap-4 items-center">
          <img
            src="./avatar.png"
            alt="avatar"
            className="size-12 object-cover rounded-full"
          />
          <div>
            <span className="text-sm font-bold">John Doe</span>
            <p className="text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <img src="./phone.png" className="size-6 " alt="" />
          <img src="./video.png" className="size-6 " alt="" />
          <img src="./info.png" className="size-6 " alt="" />
        </div>
        <div></div>
      </div>
      <div className="flex-1 flex flex-col gap-8 overflow-y-scroll scrollbar-hidden">
        <div className="p-4 flex gap-2 max-w-[70%]">
          <img src="./avatar.png" alt="" className="size-8 rounded-xl" />
          <div>
            <p className="bg-black/60 rounded-xl p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              repellat eaque iure ea, facilis reiciendis debitis non officia
              eveniet rerum possimus omnis nemo placeat animi. Ut, vero.
              Numquam, omnis exercitationem!
            </p>
            <span className="opacity-40 text-sm mt-4">1 min ago</span>
          </div>
        </div>
        <div className="self-end max-w-[70%]">
          <div>
            <p className="p-4 bg-white/30 rounded-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              repellat eaque iure ea, facilis reiciendis debitis non officia
              eveniet rerum possimus omnis nemo placeat animi. Ut, vero.
              Numquam, omnis exercitationem!
            </p>
            <span className="opacity-40 text-sm mt-4">1 min ago</span>
          </div>
        </div>
        <div className="p-4 flex gap-2 max-w-[70%]">
          <img src="./avatar.png" alt="" className="size-8 rounded-xl" />
          <div>
            <p className="bg-black/60 rounded-xl p-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              repellat eaque iure ea, facilis reiciendis debitis non officia
              eveniet rerum possimus omnis nemo placeat animi. Ut, vero.
              Numquam, omnis exercitationem!
            </p>
            <span className="opacity-40 text-sm mt-4">1 min ago</span>
          </div>
        </div>
        <div className="self-end max-w-[70%]">
          <div>
            <img src="https://i.pinimg.com/564x/cc/df/79/ccdf79d72c01826b3e23db5f1c75a396.jpg" className="w-full h-96 rounded-xl object-cover" alt="" />
            <p className="p-4 bg-white/30 rounded-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              repellat eaque iure ea, facilis reiciendis debitis non officia
              eveniet rerum possimus omnis nemo placeat animi. Ut, vero.
              Numquam, omnis exercitationem!
            </p>
            <span className="opacity-40 text-sm mt-4">1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div>
        <div className="flex gap-2 items-center p-4 border-t border-white/30 justify-between">
          <div className="flex gap-2">
            <img src="./img.png" className="size-6 cursor-pointer" alt="" />
            <img src="./camera.png" className="size-6 cursor-pointer" alt="" />
            <img src="./mic.png" className="size-6 cursor-pointer" alt="" />
          </div>
          <input
            className="flex-1 outline-none bg-blue-950/80 rounded-xl p-2"
            type="text"
            name=""
            id=""
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="your message..."
          />
          <div className="relative">
            <img
              src="./emoji.png"
              className="size-6 cursor-pointer"
              onClick={handleOpen}
              alt=""
            />
            <div className="absolute right-0 bottom-[50px]">
              <EmojiPicker open={open} onEmojiClick={hndleEmoji} />
            </div>
          </div>
          <button className="py-2 px-4 bg-blue-500 font-medium text-white rounded-xl">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
