import {
    BrowserRouter as Router,
} from "react-router-dom";
import Counter from './components/Counter'
import {store} from './components/redax/reducer/Counter'
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';


function App() {
  return (
      <Provider store={store}>
      <Router>
        <div className="App">
          {/*<Menu/>*/}
            {/*<Routes/>*/}
        </div>
      </Router>
      </Provider>
  );
}

export default App;
