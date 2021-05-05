import {useEffect,useState} from 'react';
import Post from '../post/Post';
import axiosInstance from '../../services/api';
import './Posts.css';


export default function Posts (){
    let [posts, setPosts] = useState([]);
    const [post,setPost] = useState(null);

    useEffect(()=>{
        axiosInstance.get('/posts').then(value => setPosts([...value.data]));
    }, []);

const details = (id)=>{
    let newPosts = posts.find(value => value.id === id)
    setPost(newPosts)
}

  return (
      <div className={'wrapper'}>
          <div className={'left'}>
              {
              posts.map((value) => <Post key={value.id} item={value} details={details}/>)
          }
          </div>
          <div className={'right'}>
              {
                  post ? <h5> № {post.id} - Body : {post.body}</h5> : <div>here should be body of the Posts</div>
              }
              
          </div>
      </div>
  );
}