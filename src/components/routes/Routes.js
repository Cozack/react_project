import {
    Switch,
    Route,
} from "react-router-dom";
import Users from '../userPages/users/Users';
import Posts from '../postsPages/posts/Posts';
import UserDetails from '../userPages/usersDetails/UsersDetails';
export default function Routes ()  {
        return (
            <div>
<Switch>
    <Route exact path={'/users'} component={Users}/>
    <Route path={'/users/:id'} component={UserDetails}/>
    <Route path={'/posts'} component={Posts}/>
</Switch>
            </div>
        );
    }

