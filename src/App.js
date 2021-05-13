import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import NavMenu from "./components/menu";
import Routes from "./routes/routes";

function App() {
  return (
      <Router>
        <div>
          <NavMenu/>
          <Routes/>
        </div>
      </Router>
  );
}

export default App;
