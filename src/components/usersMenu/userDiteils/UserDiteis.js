// import {
//  useParams
// } from "react-router-dom";
import {useEffect, useState} from 'react';
export default function UserDiteis (props){
    // let params = useParams();
    let {match:{params:{id}}}=props;
    let [user,setUser] = useState(null);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser({...value});
            });

    }, [user]);

  return (
      <div>
          {user && <h2>{user.id} - {user.name} - {user.email}</h2>}
      </div>
  );
}