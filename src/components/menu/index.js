import {
    Link
} from "react-router-dom";
export default function NavMenu() {
    return (
        <div>
            <Link to={'/users'}>Users</Link>
            <br/>
            <Link to={'/posts'}>Posts</Link>
        </div>
    );
}
