import firebase from "../firebase";
import { FcGoogle } from "react-icons/fc";

const auth = firebase.auth();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button onClick={signInWithGoogle} className="googleButton">
      <div className="google">
        {" "}
        <FcGoogle />
      </div>{" "}
      <p>Sign in with Google</p>
    </button>
  );
}

export default SignIn;
