import {
    Link
} from "react-router-dom";
import {useEffect,useState} from 'react'
export default function PostDetails (props){
    let {match:{params:{id}}} = props
    let [post,setPost] = useState()





    const fetchData = async () => {
        const resp = await fetch("https://jsonplaceholder.typicode.com/comments");
        const json = await resp.json();
        const filter = await json.filter((value) =>value.postId === +id)
console.log(filter)
        setPost(...filter);

    }


    useEffect(() => {
        fetchData();

    }, []);

    return (
        <div>

            {

                post &&  <h4><h5> Post ID :{post.postId}</h5> <h5>Name : {post.name}</h5>  <h5> Email : {post.email}</h5> <h5> Body : {post.body}</h5></h4>
            }
        </div>
    );
}