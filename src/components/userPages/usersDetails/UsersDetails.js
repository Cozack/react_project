import {
    Link
} from "react-router-dom";
import {useEffect,useState} from 'react'
export default function UsersDetails (props){
    let {match:{params:{id}}} = props
    let [user,setUser] = useState(null)



    const fetchData = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await resp.json();
        const filter = await json.filter(value => value.userId === +id);
        console.log(filter)
       setUser(...filter);
    }


    useEffect(() => {

        fetchData();

    }, []);

    return (
        <div>
            {

                user && <h4><h5> ID :{user.userId}</h5> <h5>Title : {user.title}</h5>  <h5> Body : {user.body}</h5></h4>
            }
        </div>
    );
}