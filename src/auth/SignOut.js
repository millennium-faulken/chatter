import firebase from "../firebase";

const auth = firebase.auth();

function SignOut() {
  return (
    <button style={{ marginRight: '40px' }} className="waves-effect waves-light btn-small" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
}

export default SignOut;
