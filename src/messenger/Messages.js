import firebase from "../firebase";
import moment from "moment";
import { FaUserCircle } from "react-icons/fa";
import "./Messages.css";

const auth = firebase.auth();

function Message(props) {
  const { text, uid, photoURL, createdAt } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      {photoURL ? (
        <img src={photoURL} alt="userPhoto" />
      ) : (
        <div className="noPic">
          <FaUserCircle />
        </div>
      )}
      <div className={`messaged_${messageClass}`}>
        <p>{text}</p>
        <p className="timestamp">
          {createdAt && moment(createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
}

export default Message;
