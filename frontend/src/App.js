import "./App.css";
import PostState from "./context/postContext/PostState";

function App() {
  return (
    <AuthState>
      <PostState>
        <div>
          <h1>Hello World</h1>
        </div>
      </PostState>
    </AuthState>
  );
}

export default App;
