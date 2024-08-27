import React, { useState } from "react";
import { toast } from "react-toastify";

const LogIn = () => {
  const [avatar, Setavatar] = useState({
    file: null,
    url: "",
  });

  function handleAvatar(e) {
    Setavatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
    console.log(avatar.url);
    
  }
  function handleLogin(e){
    e.preventDefault()
    toast.warn('you have loged in')
  }
  return (
    <div className="w-full flex items-center">
      {/* left */}
      <div className="w-1/2 flex flex-col gap-4 p-16 justify-center text-center h-full">
        <h2 className="text-5xl">Welcome to our app</h2>
        <form action="" onSubmit={handleLogin} className="flex flex-col px-16 gap-4">
          <input
            type="email"
            placeholder="Email"
            className="bg-blue-950/80 outline-none text-white p-4 rounded-xl"
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            className="bg-blue-950/80 outline-none text-white p-4 rounded-xl"
            name="password"
          />
          <button type="submit" className="w-full p-4 bg-blue-500 rounded-xl">
            Sign in
          </button>
        </form>
      </div>
      <hr className="h-1/2 w-[1px] bg-white" />
      {/* left */}
      <div className="w-1/2 flex flex-col gap-4 p-16 justify-center text-center h-full">
        <h2 className="text-3xl">Create an account to our app</h2>
        <form action="" onSubmit={handleLogin} className="flex flex-col gap-4 px-16">
          <label htmlFor="file" className="gap-4 flex flex-row items-center">
            <img
              src={avatar.url || "./avatar.png"}
              className="size-16 object-cover rounded-xl"
              alt=""
            />
            <h2 className="hover:underline">Upload an image</h2>
          </label>

          <input
            type="file"
            placeholder="File"
            className="hidden"
            onChange={handleAvatar}
            id="file"
            name="file"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-blue-950/80 outline-none text-white p-4 rounded-xl"
            name="email"
          />
          <input
            type="text"
            placeholder="UserName"
            className="bg-blue-950/80 outline-none text-white p-4 rounded-xl"
            name="Username"
          />
          <input
            type="password"
            placeholder="password"
            className="bg-blue-950/80 outline-none text-white p-4 rounded-xl"
            name="password"
          />
          <button type="submit" className="w-full p-4 bg-blue-500 rounded-xl">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
