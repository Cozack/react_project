import logo from "./logo.svg";
import "./App.css";
import Home from './components/home/Home';
import Posts from './components/postsMenu/posts/Posts';
import PostsDetails from './components/postsMenu/postDetails/PostDetails';
import Users from './components/usersMenu/users/Users';
import Comments from './components/commentsMenu/comments/Comments';
import CommentsDetails from './components/commentsMenu/commentDetails/CommentDetails';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Link to={"/"}>Home</Link>
                <br/>
                <Link to={"/Users"}>Users</Link>
                <br/>
                <Link to={"/Posts"}>Posts</Link>
                <br/>
                <Link to={"/Comments"}>Comments</Link>

                <Switch>
                <Route exact path={"/"} render={() =><div>Home Page</div>}/>
                <Route path={"/Users"} component={Users}/>
                <Route exact path={"/Posts"} component={Posts}/>
                <Route path={"/posts/:id"} component={PostsDetails}/>
                <Route exact path={"/Comments"} component={Comments}/>
                 <Route path={'/comments/:id'} component={CommentsDetails}/>

                </Switch>

            </div>
        </Router>

    );
}

export default App;
