import "./App.css";
import AuthState from "./context/authContext/AuthState";
import PostState from "./context/postContext/PostState";
import Aside from "./layout/aside/index";
import Body from "./layout/body/index";
import { Footer } from "./layout/footer/index";
import { Navbar } from "./layout/navbar/index";

function App() {
  return (
    <AuthState>
      <PostState>
        <div className="App">
          <Navbar />
          <div className="Container">
            <Aside />
            <Body />
          </div>
          <Footer />
        </div>
      </PostState>
    </AuthState>
  );
}

export default App;
