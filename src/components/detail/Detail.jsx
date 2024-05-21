import React from "react";
import "./detail.css";
import { auth, db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

function Detail() {
  const {
    chatId,
    user,
    isCurrentUserBlocked,
    isReceiverUserBlocked,
    changeBlock,
  } = useChatStore();

  const { currentUser } = useUserStore();

  async function handleBlock() {
    if (!user) {
      return;
    }
    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverUserBlocked
          ? arrayRemove(user.id)
          : arrayUnion(user.id),
      });
      changeBlock();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./av2.png"} alt="" />
        <h2>{user?.username}</h2>
      </div>
      <div className="center"></div>
      <div className="info">
        <div className="buttons">
          <button onClick={handleBlock}>
            {isCurrentUserBlocked
              ? "You are blocked"
              : isReceiverUserBlocked
              ? "User blocked"
              : "Block User"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
