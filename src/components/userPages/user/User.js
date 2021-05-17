import {
    Link
} from "react-router-dom";
export default function User ({item,url})  {
        return (
            <div>
<div><div className={'mainDiv'}>{item.id} - {item.first_name}</div>
    <div className={'secondDiv'}><img src={item.avatar} alt=""/></div>
    <Link to={url+'/'+item.id}>Show User Details</Link> </div>
            </div>
        );
    }

