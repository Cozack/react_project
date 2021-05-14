import {
    Link
} from "react-router-dom";
export default function User ({item,url})  {
        return (
            <div>
<div>{item.id} - {item.name}  <Link to={url+'/'+item.id}>Show User Post</Link> </div>
            </div>
        );
    }

