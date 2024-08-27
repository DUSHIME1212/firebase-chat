import React, { useState } from "react";
import AddUser from "./AddUser";

const Chatlists = () => {
  const [addMode, setaddMode] = useState(false);
  function handlemode() {
    setaddMode((prev) => !prev);
  }
  return (
    <div className="flex flex-col">
      <div className="flex items-center  gap-4 p-4 justify-between ">
        <div className="flex gap-4 w-full bg-blue-800/50 rounded-xl p-2">
          <img src="./search.png" className="size-6" alt="" />
          <input
            type="text"
            className="flex-1 bg-transparent focus:outline-none p-1"
            placeholder="search"
          />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          onClick={handlemode}
          className="size-8 bg-blue-900 rounded-xl p-2"
          alt=""
        />
      </div>
      <div className="flex flex-col h-[490px]">
        <div className="flex gap-4 items-center border-b border-white/30 p-4">
          <img src="./avatar.png" className="size-8 rounded-xl" alt="" />
          <div>
            <span>Jane doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="flex gap-4 items-center border-b border-white/30 p-4">
          <img src="./avatar.png" className="size-8 rounded-xl" alt="" />
          <div>
            <span>Jane doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="flex gap-4 items-center border-b border-white/30 p-4">
          <img src="./avatar.png" className="size-8 rounded-xl" alt="" />
          <div>
            <span>Jane doe</span>
            <p>Hello world</p>
          </div>
        </div>
        <div className="flex gap-4 items-center border-b border-white/30 p-4">
          <img src="./avatar.png" className="size-8 rounded-xl" alt="" />
          <div>
            <span>Jane doe</span>
            <p>Hello world</p>
          </div>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  );
};

export default Chatlists;
