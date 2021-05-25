import firebase from "../firebase";
import { useEffect, useRef, useState } from "react";
import Message from "./Messages";
import { v4 as uuidv4 } from "uuid";
import { IoSend } from "react-icons/io5";
import "./Messages.css";

const auth = firebase.auth();
const ref = firebase.firestore().collection("messages");

function Messenger() {
  const placeholder = useRef();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  function getMessages() {
    ref.orderBy("createdAt", "asc").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setMessages(items);
    });
  }

  useEffect(() => {
    getMessages();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await ref.add({
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      id: uuidv4(),
    });

    setText("");
    placeholder.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="main">
      <div className="chat">
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}
        <span ref={placeholder}></span>
      </div>

      <form className="mainForm" onSubmit={sendMessage}>
        <textarea
          className="messageInput"
          placeholder="Message"
          data-length="300"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="submit" type="submit" disabled={!text}>
          <IoSend />
        </button>
      </form>
      <h1>Rules:</h1>
      <li>Be Nice</li>
      <li>No bad words</li>
      <li>Enjoy!</li>
    </div>
  );
}

export default Messenger;
