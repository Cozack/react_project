import {
    Switch,
    Route,
} from "react-router-dom";
import Users from '../userPages/users/Users';
import Posts from '../postsPages/posts/Posts';
import UserDetails from '../userPages/usersDetails/UsersDetails';
import PostDetails from '../postsPages/postsDetails/PostDetails';
export default function Routes ()  {
        return (
            <div>
<Switch>
    <Route exact path={'/users'} component={Users}/>
    <Route path={'/users/:id'} component={UserDetails}/>
    <Route exact path={'/posts'} component={Posts}/>
    <Route path={'/posts/:id'} component={PostDetails}/>
</Switch>
            </div>
        );
    }

