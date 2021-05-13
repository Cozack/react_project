import {
  Link
} from "react-router-dom";
export default function Invent ({item,url}){
  return (
      <div className={'wrap'}>
          <div className={'view'}>{item.id} - {item.title}</div>
          <div className={'link'}><Link to={url + "/" + item.id}>Show Details</Link></div>
      </div>
  );
}