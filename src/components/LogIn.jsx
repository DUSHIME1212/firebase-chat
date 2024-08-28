import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Auth, db } from "../libs/Firebase";
import { setDoc, doc } from "firebase/firestore";
import upload from "../libs/upload";

const LogIn = () => {
  const [avatar, Setavatar] = useState({
    file: null,
    url: "",
  });

  async function handleRegister(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, Username } = Object.fromEntries(formData);


    const imgUrl = await upload(avatar.file)

    console.log(email, password, Username);

    try {
      const res = await createUserWithEmailAndPassword(Auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        Username,
        email,
        avatar: imgUrl,
        id: res.user.uid ,
        blocked:[],
        password
      });



      await setDoc(doc(db, "userChats", res.user.uid), {
        chats: [],
      });

      console.log('Account created');


      

    } catch (error) {
      console.log(error);
      
    }
  }

  function handleAvatar(e) {
    Setavatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
    console.log(avatar.url);
  }
  async function handleLogin(e) {
    e.preventDefault();

    const fromData = new FormData
    const {email,password } = Object.fromEntries(e.target)

    try {
      await signInWithEmailAndPassword(Auth,email,password)
      
    } catch (error) {
      console.log(error);
      
    }
    toast.warn("you have logged in");
  }
  return (
    <div className="min-w-full flex max-md:flex-col items-center">
      {/* left */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 p-16 justify-center text-center h-full">
        <h2 className="text-5xl">Welcome to our app</h2>
        <form
          action=""
          onSubmit={handleLogin}
          className="flex flex-col px-16 gap-4"
        >
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
      <div className="w-full md:w-1/2 flex flex-col gap-4 p-16 justify-center text-center h-full">
        <h2 className="text-3xl">Create an account to our app</h2>
        <form
          action=""
          onSubmit={handleRegister}
          className="flex flex-col gap-4 px-16"
        >
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
