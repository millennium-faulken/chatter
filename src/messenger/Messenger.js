import firebase from "../firebase";
import { useEffect, useRef, useState } from "react";
import Message from "./Messages";
import { v4 as uuidv4 } from "uuid";
import { IoSend } from "react-icons/io5";
import "./Messages.css"

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
    <div>
      <main>
        {messages &&
          messages.map((msg) => <Message key={msg.id} message={msg} />)}

        <span ref={placeholder}></span>
      </main>

      <form className="mainForm col s12" onSubmit={sendMessage}>
        <div className="row valign-wrapper" >
          <div className="input-field">
            <textarea
              className="materialize-textarea"
              id="textarea1"
              data-length="300"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="textarea1">Message</label>
          </div>
          <button type="submit" disabled={!text} >
            <IoSend />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Messenger;
