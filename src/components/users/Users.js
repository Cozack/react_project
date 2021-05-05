import {useEffect,useState} from 'react';
import User from '../user/User';
import './Users.css';
import axiosInstance from '../../services/api';



export default function Users() {
    let [users,setUsers] = useState([]);
    const [singleUser,setSingleUser] = useState(null);

   useEffect(()=>{
       axiosInstance.get('/users').then(value => setUsers([...value.data]));
   }, []);
    const search = (id)=>{
       let newUsers =users.find(value => value.id===id)
        console.log(newUsers)
        setSingleUser(newUsers)
    }

    return (
        <div className={'wrap'}>
            <div className={'mainDiv'}>
                {
                    users.map((value) => <User key={value.id} item={value} search={search}/>)
                }
            </div>
            <div className={'secondDiv'}>
                {
                    singleUser ? <h2>{singleUser.id} - {singleUser.name}- {singleUser.address.street} - {singleUser.address.city} {singleUser.phone} - {singleUser.username} - {singleUser.website} </h2> : (<div>User not defined</div>)
                }
            </div>
        </div>
    );
}
