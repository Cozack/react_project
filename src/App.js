import './App.css';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import React from "react";
import Comments from './components/comments/Comments';
import Photos from './components/photos/Photos';
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
                <Link to = {'/posts'}>to posts</Link>
                <br/>
                <br/>
                <Link to = {'/comments'}>to comments</Link>
                <br/>
                <br/>
                <Link to = {'/photos'}>to photos</Link>
                <Switch>
                    <Route path = {'/users'} render={()=>(<Users/>)}/>
                    <Route path = {'/posts'} render={()=>(<Posts/>)}/>
                    <Route path = {'/comments'} render={()=>(<Comments/>)}/>
                    <Route path = {'/photos'} render={()=>(<Photos/>)}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;