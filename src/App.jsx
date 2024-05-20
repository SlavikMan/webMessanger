import React, { useEffect } from "react";
import List from "./components/list/List";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

function App() {
  const { currentUser, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  return (
    <div className="container">
      {currentUser ? (
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
