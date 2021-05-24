import firebase from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../auth/SignIn";
import SignOut from "../auth/SignOut";

const auth = firebase.auth();

const Nav = () => {
  const [user] = useAuthState(auth);
  const buttonDisplay = user ? <SignOut /> : <SignIn />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <a style={{ marginLeft: "40px" }} href="/" className="h1">
        Chatter
      </a>
      <ul className="right">{buttonDisplay}</ul>
    </nav>
  );
};

export default Nav;
