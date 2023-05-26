import "./App.css";
import Login from "./pages/Login";
import HeadingBar from "./pages/HeadingBar";
import LatestPrice from "./pages/LatestPrice";

function App() {
  return (
    <div className="app-container">
      <HeadingBar />
      <div className="content-container">
        <div className="login-container">
          <Login />
        </div>
        <div className="text-container">
          <LatestPrice />
        </div>
      </div>
    </div>
  );
}

export default App;
