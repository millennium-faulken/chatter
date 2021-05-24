import firebase from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Messenger from "./messenger/Messenger";
import Nav from "./navBar/Nav";

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <Nav />
      {user ? <Messenger /> : null}
    </div>
  );
}

export default App;
