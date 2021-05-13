import {
  Link
} from "react-router-dom";
export default function Character ({item,url}){
    console.log(item);
    return (
      <div>
          <div>
              {item.id} - {item.name}
              <Link to={url+'/'+item.id}>FULL INFO</Link>
          </div>
      </div>
  );
}