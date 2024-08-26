import Chat from "./components/chats/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";
import LogIn from "./components/LogIn";

export default function App() {
  const user = false;
  return (
    <h1 className="min-h-screen font-creator flex items-center justify-center font-bold">
      <div className="h-[90vh] w-[90vw] text-white flex rounded-xl border-white/30 border-2 bg-blue-900/70 backdrop-blur-lg">
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
    </h1>
  );
}
