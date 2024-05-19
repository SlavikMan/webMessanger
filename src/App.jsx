import React from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";

function App() {
  const user = true;
  return (
    <div className="container">
      {user ? (
        <>
          <Detail />
          <Chat />
          <List />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
