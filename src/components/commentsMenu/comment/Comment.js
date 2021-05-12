import {
  Link
} from "react-router-dom";
import '../comments.css'
export default function Comment ({item,url}){
  return (
      <div>
          {item.id} - {item.name}
          <Link to={url+'/'+item.id}><span>Show Details</span></Link>
      </div>
  );
}