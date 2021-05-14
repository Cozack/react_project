import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import NavMenu from './components/menu/index'
import Routes from './components/routes/Routes'

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
