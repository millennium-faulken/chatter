import firebase from "../firebase";


const auth = firebase.auth();

function SignOut() {
  return (
    <button className="signOut" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
}

export default SignOut;
