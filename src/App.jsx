import React from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <div className="container">
      <Detail />
      <Chat />
      <List />
    </div>
  );
}

export default App;
