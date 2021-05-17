import {useEffect,useState} from 'react'
export default function UsersDetails (props){
    let {match:{params:{id}}, location:{state}} = props
    let [user,setUser] = useState(null)

    useEffect(() => {
        fetch('https://reqres.in/api/users/'+id )
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setUser(value.data)
            })
    }, [id])



    return (
        <div>
            {

                user && <h4>ID :{user.id}<br/> Email : {user.email}  <br/> First Name : {user.first_name}<br/> Last Name : {user.last_name}</h4>
            }
        </div>
    );
}