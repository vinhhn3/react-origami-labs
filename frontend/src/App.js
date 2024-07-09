import "./App.css";
import AuthState from "./context/authContext/AuthState";
import PostState from "./context/postContext/PostState";

function App() {
  return (
    <PostState>
      <AuthState>
        <div>
          <h1>Hello World</h1>
        </div>
      </AuthState>
    </PostState>
  );
}

export default App;
