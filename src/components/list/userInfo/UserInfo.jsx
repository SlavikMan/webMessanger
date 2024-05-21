import React from "react";
import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";
import { auth } from "../../../lib/firebase";

function UserInfo() {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.id.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>

      <button className="logOut" onClick={() => auth.signOut()}>
        Log Out
      </button>
    </div>
  );
}

export default UserInfo;
