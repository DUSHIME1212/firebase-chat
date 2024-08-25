import Chat from "./components/chats/Chat";
import Details from "./components/details/Details";
import List from "./components/list/List";

export default function App() {
  return (
    <h1 className="min-h-screen font-creator flex items-center justify-center font-bold">
      <div className="h-[90vh] w-[90vw] text-white flex rounded-xl border-white/30 border-2 bg-blue-900/70 backdrop-blur-lg">
        <List />
        <Chat />
        <Details />
      </div>
    </h1>
  );
}
