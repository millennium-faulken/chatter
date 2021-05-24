import firebase from "../firebase";

const auth = firebase.auth();

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button style={{ marginRight: '40px' }} className="waves-effect waves-light btn" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

export default SignIn;
