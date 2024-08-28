import { useEffect } from "react";
import Chat from "./components/chats/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import LogIn from "./components/LogIn";
import Notification from "./components/Notofications/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "./libs/Firebase";

export default function App() {
  const user = false;


  useEffect(() => {

    const onSub = onAuthStateChanged(Auth,(user) => {
      console.log(user);
      
    })

    return () => {
      onSub();
    }

  },[])



  return (
    <h1 className="min-h-screen font-creator flex items-center justify-center font-bold">
      <div className="min-h-[90vh] w-[90vw] text-white flex rounded-xl border-white/30 border-2 bg-blue-900/70 backdrop-blur-lg">
        {user ? (
          <>
            <List />
            <Chat />
            <Details />
          </>
        ) : (
          <LogIn />
        )}
      </div>
      {/* <Notification/> */}
    </h1>
  );
}
