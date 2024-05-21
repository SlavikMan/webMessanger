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
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZDKwGlc_iK7PdkymLJuarMBmGXGZHKMYqqD39iS34Q&s"
                  alt=""
                />
                <span>photo_2024.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleBlock}>
            {isCurrentUserBlocked
              ? "You are blocked"
              : isReceiverUserBlocked
              ? "User blocked"
              : "Block User"}
          </button>
          <button className="logOut" onClick={() => auth.signOut()}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
