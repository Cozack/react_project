import {useState,useEffect} from 'react';
import User from '../user/User';
export default function Users (props)  {
    let {match:{url}}=props
    let [users,setUsers] = useState([]);
    let fetchFunction = async ()=>{
        let resp = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await resp.json();
        setUsers(json);
    }

    useEffect(()=>{
        fetchFunction()
    },[])

        return (
            <div>
                {
                    users.map(value => <User key={value.id} item={value} url={url}/>)
                }
            </div>
        );
    }

