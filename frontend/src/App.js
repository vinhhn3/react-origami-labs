import "./App.css";
import AuthState from "./context/authContext/AuthState";
import PostState from "./context/postContext/PostState";
import Aside from "./layout/aside/index";
import { Footer } from "./layout/footer/index";
import { Navbar } from "./layout/navbar/index";
import Home from "./pages/home/index";

function App() {
  return (
    <PostState>
      <AuthState>
        {/* <BrowserRouter> */}
        <div className="App">
          <Navbar />
          <div className="Container">
            <Aside />
            {/* <Body /> */}
            <Home />
          </div>
          <Footer />
        </div>
        {/* </BrowserRouter> */}
      </AuthState>
    </PostState>
  );
}

export default App;
