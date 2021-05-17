import {
    Switch,
    Route,
} from "react-router-dom";
import Users from '../userPages/users/Users';
import Home from '../home/Home'
import UserDetails from '../userPages/usersDetails/UsersDetails';
export default function Routes ()  {
        return (
            <div>
<Switch>

    <Route exact path={'/'} component={Home}/>
    <Route exact path={'/users'} component={Users}/>
    <Route  path={'/users/:id'} component={UserDetails}/>
</Switch>
            </div>
        );
    }

