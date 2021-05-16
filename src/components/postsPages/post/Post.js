import {
    Link
} from "react-router-dom";
export default function Post ({item,url})  {
    return (
        <div>
            <div>{item.id} - {item.title}  <Link to={url+'/'+item.id}>Show posts comments</Link> </div>
        </div>
    );
}

