import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";
import "./Nav.css";

const auth = firebase.auth();

const Nav = () => {
  const [user] = useAuthState(auth);
  const buttonDisplay = user ? <SignOut /> : <SignIn />;
  return (
    <div className="nav">
      <h1>Chatter</h1>
      {buttonDisplay}
    </div>
  );
};

export default Nav;
