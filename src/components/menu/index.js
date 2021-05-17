import {
    Link
} from "react-router-dom";
export default function NavMenu() {
    return (
        <div>
            <Link to={'/Home'}>Home page</Link>
            <br/>
            <Link to={'/users'}>Users</Link>

        </div>
    );
}
