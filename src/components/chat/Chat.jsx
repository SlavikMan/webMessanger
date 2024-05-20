import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", "55vEpOB3M11taHU5xMkD"),
      (res) => {
        setChat(res.data());
      }
    );

    return () => {
      unSub();
    };
  }, []);

  console.log(chat);

  // useEffect(() => {
  //   const unSub = onSnapshot(
  //     doc(db, "chats", "7jQHoLTRD9UrWV416zGx"),
  //     (res) => {
  //       setChat(res.data);
  //     }
  //   );
  //   return () => {
  //     unSub();
  //   };
  // }, []);

  function handleEmoji(e) {
    setText((prev) => prev + e.emoji);
    // setOpen(false);
  }
  // console.log(chat);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel
              molestias veritatis repellat et dolorem aspernatur, magnam, quos
              veniam, blanditiis minima eos necessitatibus voluptatibus! Culpa
              iusto ratione optio excepturi dolores?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgZDKwGlc_iK7PdkymLJuarMBmGXGZHKMYqqD39iS34Q&s"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel
              molestias veritatis repellat et dolorem aspernatur, magnam, quos
              veniam, blanditiis minima eos necessitatibus voluptatibus! Culpa
              iusto ratione optio excepturi dolores?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel
              molestias veritatis repellat et dolorem aspernatur, magnam, quos
              veniam, blanditiis minima eos necessitatibus voluptatibus! Culpa
              iusto ratione optio excepturi dolores?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel
              molestias veritatis repellat et dolorem aspernatur, magnam, quos
              veniam, blanditiis minima eos necessitatibus voluptatibus! Culpa
              iusto ratione optio excepturi dolores?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel
              molestias veritatis repellat et dolorem aspernatur, magnam, quos
              veniam, blanditiis minima eos necessitatibus voluptatibus! Culpa
              iusto ratione optio excepturi dolores?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          value={text}
          type="text"
          placeholder="Type a message"
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
