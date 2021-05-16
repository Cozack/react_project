import {useState,useEffect} from 'react';
import Post from '../post/Post';
export default function Posts (props)  {
    let {match:{url}}=props
    let [posts,setPosts] = useState([]);
    let fetchFunction = async ()=>{
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        let json = await resp.json();
        setPosts(json);
    }

    useEffect(()=>{
        fetchFunction()
    },[])

    return (
        <div>
            {
                posts.map(value => <Post key={value.userId} item={value} url={url}/>)
            }
        </div>
    );
}

