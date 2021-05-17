import {useState,useEffect} from 'react';
import User from '../user/User';
import UserDetails from '../usersDetails/UsersDetails';
import '../Users.css'
export default function Users (props)  {
    let [users,setUsers] = useState([]);
    let [counter,setCounter] = useState(1)
    let {match:{url}}=props;
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + counter)
            .then(value => value.json())
            .then(value => {
                setUsers(value.data)
            })
    }, [counter])

    const increment=()=>{
        if (counter>=2){
            return
        }
        setCounter(counter+1)
    }
    const decrement=()=>{
        if (counter<=0){
            return
        }
        setCounter(counter-1)
    }


        return (
            <div className={'wrapper'}>
                <div className={'btn'}>
                    <button onClick={decrement}>Previous page</button>
                    <button onClick={increment}>Next page</button>
                </div>
                <div className={'blocks'}> {
                    users.map(value => <User key={value.id} item={value} url={url}/>)

                }</div>

            </div>

        );
}

