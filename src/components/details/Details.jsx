import React from "react";

const Details = () => {
  const img1 = [
    {
      img: "https://i.pinimg.com/736x/4d/b2/d4/4db2d4dbbb1bf11b68cf3f7bbe0ca07a.jpg",
      name: "Photo1.png",
    },
  ];
  return (
    <div className="flex-1 flex gap-4 flex-col overflow-y-scroll scrollbar-hidden">
      <div className="flex flex-col gap-4 p-8 text-center items-center">
        <img src="./avatar.png" className="size-24  rounded-xl" alt="" />
        <h2 className="w-full text-3xl">John doe</h2>
        <p className="w-full  text-opacity-40 font-thin">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex border border-white/30 flex-col gap-4 p-4">
        <div>
          <div className="flex justify-between items-center">
            <span>Privancy & help</span>
            <img src="./arrowUp.png" className="size-6 bg-blue-900/60 rounded-lg p-2" alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <span>shared Photos</span>
            <img src="./arrowDown.png" className="size-6 bg-blue-900/60 rounded-lg p-2" alt="" />
          </div>
          <div className="w-full min-h-32">
            <div>
              <div className="w-full flex justify-start p-4 gap-2 flex-wrap">
                {[...img1,...img1,...img1].map((item, i) => (
                  <div key={i} className="relative group w-[48%] h-1/2">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-32 object-cover rounded-xl"
                    />
                    <span className="opacity-30 text-sm">{item.name}</span>
                    <img src="./download.png" alt="" className="size-4 hidden group-hover:block duration-700 absolute top-2 cursor-pointer left-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <span>Chat settings</span>
            <img src="./arrowUp.png" className="size-6 bg-blue-900/60 rounded-lg p-2" alt="" />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <span>Shared files</span>
            <img src="./arrowUp.png" className="size-6 bg-blue-900/60 rounded-lg p-2" alt="" />
          </div>
        </div>
        <button className="hover:bg-opacity-100 bg-red-500 bg-opacity-80 duration-700 p-2 rounded-xl">Block user</button>
        <button className="hover:bg-opacity-100 bg-blue-500 bg-opacity-80 duration-700 p-2 rounded-xl">Log out</button>

      </div>
    </div>
  );
};

export default Details;
