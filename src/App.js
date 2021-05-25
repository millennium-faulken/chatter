import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Messenger from "./messenger/Messenger";
import Nav from "./navBar/Nav";
import './index.css'

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Nav />
      {user ? <Messenger /> : <h1 className="notSignedIn">Please sign in to get started!</h1>}
    </div>
  );
}

export default App;
