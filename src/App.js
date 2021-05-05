import './App.css';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Link to = {'/users'}>to users</Link>
                <br/>
                <br/>
                <br/>
                <Link to = {'/posts'}>to posts</Link>
                <Switch>
                    <Route path = {'/users'} render={()=>(<Users/>)}/>
                    <Route path = {'/posts'} render={()=>(<Posts/>)}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;